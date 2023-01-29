module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        accent: "#d12245",
        dark: "#222",
      },
      spacing: {},
      backgroundImage: {},
      screens: {
        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      fontSize: {
        "1xl": [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "0.04em",
            fontWeight: "400",
          },
        ],
        "2xl": [
          "1.8rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "0.04em",
            fontWeight: "400",
          },
        ],
        "3xl": [
          "3rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "0.04em",
            fontWeight: "400",
          },
        ],
      },
    },
  },
};
