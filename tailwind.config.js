/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        panel: "var(--panel)",
        "panel-border": "var(--panel-border)",
        "accent-start": "var(--accent-start)",
        "accent-end": "var(--accent-end)",
        hotPink: "#ec4899",
        electricPurple: "#7c3aed",
        midnight: "#050816",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 45px rgba(236, 72, 153, 0.24)",
      },
    },
  },
  plugins: [],
};