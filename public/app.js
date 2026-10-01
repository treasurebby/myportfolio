const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
let explicitTheme = false;
try { explicitTheme = Boolean(localStorage.getItem('treasure-theme')); } catch {}

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#111012' : '#fff7fa';
}
applyTheme(root.dataset.theme);
themeButton.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  explicitTheme = true;
  applyTheme(theme);
  try { localStorage.setItem('treasure-theme', theme); } catch {}
});
systemTheme.addEventListener('change', event => {
  if (!explicitTheme) applyTheme(event.matches ? 'dark' : 'light');
});

// Nine matching views let the head look toward the pointer while the body stays put.
const avatar = document.querySelector('.avatar');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(pointer: fine)');
let frame = 0;
let pointer = null;
function resetAvatar() {
  if (!avatar) return;
  cancelAnimationFrame(frame);
  frame = 0;
  pointer = null;
  avatar.style.backgroundPosition = '50% 50%';
  avatar.style.transform = '';
}
function lookAtPointer() {
  frame = 0;
  if (!avatar || !pointer || reducedMotion.matches || !finePointer.matches) return;
  const rect = avatar.getBoundingClientRect();
  const dx = pointer.x - (rect.left + rect.width / 2);
  const dy = pointer.y - (rect.top + rect.height / 2);
  const column = dx < -65 ? 0 : dx > 65 ? 2 : 1;
  const row = dy < -65 ? 0 : dy > 65 ? 2 : 1;
  avatar.style.backgroundPosition = `${column * 50}% ${row * 50}%`;
  avatar.style.transform = `rotate(${Math.max(-3, Math.min(3, dx / 180))}deg)`;
}
window.addEventListener('pointermove', event => {
  if (!avatar || event.pointerType === 'touch' || reducedMotion.matches || !finePointer.matches) return;
  pointer = { x: event.clientX, y: event.clientY };
  if (!frame) frame = requestAnimationFrame(lookAtPointer);
}, { passive: true });
document.documentElement.addEventListener('pointerleave', resetAvatar);
window.addEventListener('blur', resetAvatar);
window.addEventListener('scroll', resetAvatar, { passive: true });
reducedMotion.addEventListener('change', resetAvatar);
finePointer.addEventListener('change', resetAvatar);
document.getElementById('year').textContent = new Date().getFullYear();
