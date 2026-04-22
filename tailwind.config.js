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
        hotPink: "#e2e8f0",
        electricPurple: "#94a3b8",
        midnight: "#0a0f1e",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 45px rgba(148, 163, 184, 0.4)",
      },
    },
  },
  plugins: [],
};