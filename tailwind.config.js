/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D16BA5", // Dark Feminine Pink
          light: "#E8B4D3",   // Soft Blush Pink (Glow)
          dark: "#C85D9E",    // Hover Accent
        },
        secondary: {
          DEFAULT: "#B57EDC", // Lavender Purple
          light: "#D4A5FF",   // Light Lavender
          dark: "#A569BD",    // Card Accent
        },
        dark: {
          DEFAULT: "#0D0D0F", // Premium Dark Black
          plum: "#15111E",    // Deep Purple Tint
          charcoal: "#1B1725", // Soft Charcoal
          grey: "#2A2A30",
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.8, filter: 'brightness(1)' },
          '50%': { opacity: 1, filter: 'brightness(1.3)' },
        }
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #0D0D0F 0%, #15111E 100%)',
        'feminine-gradient': 'linear-gradient(135deg, #D16BA5 0%, #B57EDC 100%)',
      }
    },
  },
  plugins: [],
}
