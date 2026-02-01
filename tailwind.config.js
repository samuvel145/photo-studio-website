/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors
        primary: {
          DEFAULT: "#F4C7C3", // Soft blush pink
          dark: "#E0A09B",    // Slightly darker for hover
          light: "#FFEAE8",   // Lighter shade
        },
        secondary: {
          DEFAULT: "#F5F1E8", // Warm beige
          dark: "#E6DCCA",
          light: "#FFFCF5",
        },
        accent: {
          DEFAULT: "#A8B5A0", // Sage green
          dark: "#8F9D87",
          light: "#C6D3BE",
        },
        // Semantic/Functional colors if needed, mapping to palette
        text: {
          main: "#333333", // Charcoal
          body: "#555555", // Dark grey
          light: "#FAFAF8", // Off-white
        }
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
      // Extended spacing scale (example additions)
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // Custom box shadows
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      // Custom animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s infinite linear',
      },
    },

    // Custom breakpoints if needed (Tailwind defaults are usually sufficient, but can be customized)
    screens: {
      'xs': '475px', // Extra small devices
      // 'sm': '640px', // Tablet Portrait (default)
      // 'md': '768px', // Tablet Landscape (default)
      // 'lg': '1024px', // Laptop (default)
      // 'xl': '1280px', // Desktop (default)
      // '2xl': '1536px', // Large Desktop (default)
    },
  },
  plugins: [],
}
