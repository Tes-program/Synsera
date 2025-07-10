/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(45deg, #6366F1, #8B5CF6, #EC4899, #F59E0B)",
        "cyber-gradient": "linear-gradient(45deg, #00FFFF, #6366F1, #8B5CF6)",
        "warm-gradient": "linear-gradient(45deg, #FF6B35, #F59E0B, #EAB308)",
        "cool-gradient": "linear-gradient(45deg, #3B82F6, #06B6D4, #00FFFF)",
      },
      colors: {
        "deep-black": "#0A0A0A",
        "electric-indigo": "#6366F1",
        "soft-gray": "#F1F5F9",
        "warm-gray": "#64748B",
        "cyber-cyan": "#00FFFF",
        "neon-orange": "#FF6B35",
        "electric-purple": "#8B5CF6",
        "warm-amber": "#F59E0B",
        "cool-blue": "#3B82F6",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "scale-up": "scaleUp 0.6s ease-out forwards",
        "slide-left": "slideLeft 0.8s ease-out forwards",
        "slide-right": "slideRight 0.8s ease-out forwards",
        magnetic: "magnetic 0.3s ease-out forwards",
        "text-reveal": "textReveal 1s ease-out forwards",
        loader: "loader 2s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite alternate",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        "text-wave": "text-wave 2s ease-in-out infinite",
        "text-glitch": "text-glitch 0.5s ease-in-out infinite",
        "gradient-flow": "gradient-flow 3s ease-in-out infinite",
        "morph-text": "morph-text 4s ease-in-out infinite",
        "split-reveal": "split-reveal 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        magnetic: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        textReveal: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        loader: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
        },
        pulseGlow: {
          "0%": {
            textShadow: "0 0 5px #6366F1, 0 0 10px #6366F1, 0 0 15px #6366F1",
            transform: "scale(1)",
          },
          "100%": {
            textShadow: "0 0 10px #6366F1, 0 0 20px #6366F1, 0 0 30px #6366F1",
            transform: "scale(1.02)",
          },
        },
        "text-shimmer": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "text-wave": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "text-glitch": {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        "gradient-flow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "morph-text": {
          "0%, 100%": {
            transform: "scale(1) skew(0deg)",
            filter: "hue-rotate(0deg)",
          },
          "25%": {
            transform: "scale(1.05) skew(2deg)",
            filter: "hue-rotate(90deg)",
          },
          "50%": {
            transform: "scale(0.95) skew(-2deg)",
            filter: "hue-rotate(180deg)",
          },
          "75%": {
            transform: "scale(1.02) skew(1deg)",
            filter: "hue-rotate(270deg)",
          },
        },
        "split-reveal": {
          "0%": {
            transform: "translateY(100%) rotateX(90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0%) rotateX(0deg)",
            opacity: "1",
          },
        },
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
