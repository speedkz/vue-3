// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-main": "#004A98",
        "primary-85": "rgba(0, 0, 0, 0.85)",
        "primary-light-1": "#59A8E0",
        "secondary-45": "rgba(0, 0, 0, 0.45)",
        "neutral-5": "#D9D9D9",
        "error-1": "#FFF2E8",
        "error-2": "#FFD8BF",
        "error-5": "#FF7A45",
        success: "#13C27D",
        danger: "#FA541C",
        "grey-70": "#636363",
        "grey-80": "#424242",
        "disabled-25": "rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        xs: ["0.75rem", "1.25rem"],
        sm: ["0.875rem", "1.375rem"],
      },
    },
  },
  plugins: [],
};
