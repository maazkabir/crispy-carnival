// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    maxHeight: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      "25": "25rem",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "0.75rem",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "1.875rem",
      "5xl": "2rem",
      "6xl": "3rem",
      "7xl": "4rem",
    },
    extend: {
      colors: {
        "primary-color": "#224E89",
        "secondary-color": "#F24C26",
        "light-blue": "#5285EC",
        "dark-blue": "#144E81",
        "section-color": "#E9F5FF",
        "btn-color": "#2393F3",
        "btn-active-color": "#53A4DC",
        "btn-light-blue": "#BADFFF",
        "light-gray": "#EEF1F8",
        "dark-gray": "#7A7D7E",
        "title-color": "#537178",
        "description-color": "#8A8E92",
        "input-bg": "#EDEDED",
        "input-transparent": "rgba(255,255,255,0.2)",
        "landing-description": "#858585",
        "section-dark-blue": "#0A2F60",
        "faq-color": "#426DA6",
        "faq-light-color": "#6D91C2",
        "offer-bg": "#FAE3DE",
        "correct-green": "#2FCB5B",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    padding: ["responsive", "hover", "first", "last"],
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "970px",
          },
          "@screen xl": {
            maxWidth: "1048px",
          },
        },
      });
    },
  ],
};
