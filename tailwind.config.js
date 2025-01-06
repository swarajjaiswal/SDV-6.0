/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        antons:["Anton", "serif"],
        calsans: ['Cal Sans', 'sans-serif'],
      },

      animation: {
        "slow-marquee": "marquee 15s linear infinite", // Slow scrolling animation
        "fade-in": "fadeIn 2s ease-in-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" }, // Starts off-screen to the right
          "100%": { transform: "translateX(-100%)" }, // Moves off-screen to the left
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
