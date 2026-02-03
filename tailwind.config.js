/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  // darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#7C3AED",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        moveWave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'wave-slow': 'moveWave 20s linear infinite',
        'wave-medium': 'moveWave 12s linear infinite',
        'wave-fast': 'moveWave 7s linear infinite',
      }
    },
  },
  plugins: [],
};


// tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         moveWave: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-50%)' },
//         }
//       },
//       animation: {
//         'wave-slow': 'moveWave 20s linear infinite',
//         'wave-medium': 'moveWave 12s linear infinite',
//         'wave-fast': 'moveWave 7s linear infinite',
//       }
//     },
//   },
//   plugins: [],
// }