"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    const pointLight = new THREE.PointLight(0xec4899, 4.2, 80);
    pointLight.position.set(6, 8, 10);
    const purpleLight = new THREE.PointLight(0x7c3aed, 3.4, 80);
    purpleLight.position.set(-8, -6, 12);

    scene.add(ambientLight, pointLight, purpleLight);

    const particleCount = 3200;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      const base = index * 3;
      particlePositions[base] = (Math.random() - 0.5) * 32;
      particlePositions[base + 1] = (Math.random() - 0.5) * 24;
      particlePositions[base + 2] = (Math.random() - 0.5) * 34;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const createOrb = (geometry: THREE.BufferGeometry, color: number, x: number, y: number) => {
      const material = new THREE.MeshStandardMaterial({
        color,
        metalness: 0.55,
        roughness: 0.2,
        emissive: color,
        emissiveIntensity: 0.2,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, 0);
      scene.add(mesh);
      return mesh;
    };

    const orbOne = createOrb(new THREE.TorusKnotGeometry(1.05, 0.34, 120, 18), 0x7c3aed, -6, 2.2);
    const orbTwo = createOrb(new THREE.OctahedronGeometry(0.95, 0), 0xec4899, 6, -1.8);
    const orbThree = createOrb(new THREE.IcosahedronGeometry(0.75, 0), 0xffffff, 0.5, 3.8);

    const mouse = new THREE.Vector2(0, 0);

    const handlePointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", handleResize);
    handleResize();

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = Math.sin(elapsed * 0.12) * 0.04;

      orbOne.rotation.x = elapsed * 0.4;
      orbOne.rotation.y = elapsed * 0.55;
      orbOne.position.y = 2.2 + Math.sin(elapsed * 1.1) * 0.42;

      orbTwo.rotation.x = elapsed * 0.3;
      orbTwo.rotation.z = elapsed * 0.48;
      orbTwo.position.y = -1.8 + Math.cos(elapsed * 0.8) * 0.34;

      orbThree.rotation.y = elapsed * 0.5;
      orbThree.rotation.z = elapsed * 0.35;
      orbThree.position.y = 3.8 + Math.sin(elapsed * 1.3) * 0.26;

      camera.position.x += (mouse.x * 0.9 - camera.position.x) * 0.03;
      camera.position.y += (mouse.y * 0.6 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      orbOne.geometry.dispose();
      orbOne.material.dispose();
      orbTwo.geometry.dispose();
      orbTwo.material.dispose();
      orbThree.geometry.dispose();
      orbThree.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}