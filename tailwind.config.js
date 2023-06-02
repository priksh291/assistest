/** @type {import('tailwindcss').Config} */ 
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "white": "#fff",
        "slategray": "#667085",
        "gainsboro": "#d9d9d9",
        "dimgray": "#464660",
        "lightseagreen": "#08a593",
        "gray": {
          "100": "#020100",
          "200": "rgba(255, 255, 255, 0.31)"
        },
        "silver": "#bfbfbf"
      },
      "fontFamily": {
        "inter": "Inter",
        "poppins": "Poppins"
      },
      "borderRadius": {
        "55xl-4": "74.4px"
      }
    },
    "fontSize": {
      "xs": "12px",
      "sm": "14px"
    }
  },
  "corePlugins": {
    "preflight": false
  }
}