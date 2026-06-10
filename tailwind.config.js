/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A1A",
        maroon: "#7A1F1F",
        fire: "#FF6B00",
        gold: "#D4AF37",
        night: "#0F0F0F",
      },
      fontFamily: {
        display: ['"Cinzel"', "serif"],
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        urdu: ['"Noto Nastaliq Urdu"', "serif"],
      },
      backgroundImage: {
        "fire-gradient": "linear-gradient(135deg, #FF6B00 0%, #7A1F1F 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #FF6B00 100%)",
        "dark-fade": "linear-gradient(to bottom, rgba(15,15,15,0) 0%, rgba(15,15,15,0.95) 100%)",
      },
      boxShadow: {
        fire: "0 0 30px rgba(255, 107, 0, 0.35)",
        "fire-lg": "0 0 60px rgba(255, 107, 0, 0.45)",
        gold: "0 0 30px rgba(212, 175, 55, 0.35)",
      },
      keyframes: {
        smoke: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.5" },
          "50%": { opacity: "0.25" },
          "100%": { transform: "translateY(-120px) scale(1.6)", opacity: "0" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "25%": { opacity: "0.7" },
          "50%": { opacity: "0.9" },
          "75%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        spark: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "1" },
          "100%": { transform: "translateY(-200px) translateX(40px)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        smoke: "smoke 6s ease-out infinite",
        flicker: "flicker 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        spark: "spark 2.5s linear infinite",
        shimmer: "shimmer 4s linear infinite",
        "pulse-ring": "pulse-ring 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};
