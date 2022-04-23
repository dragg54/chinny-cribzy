module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        magenta: "#EC8FD0",
      },
      backgroundImage: {
        furniture: "url('../public/images/furniture.jpg')",
      },

      boxShadow: {
        overshadow: "2px 2px 2px pink",
      },

      height: {
        720: "48rem",
        "mobile-height": "550px",
        "600px": "550px",
        "500px": "500px",
        "520px": "520px",
        "760px": "760px",
        "660px": "660px",
        "200px": "200px",
        "300px": "300px",
        "900px": "900px",
        "85rem": "72rem",
        "10rem": "10rem",
        "32rem": "32rem",
        "mobile-box": "25rem",
        "40rem": "40rem",
        "400px": "400px",
        "1000px": "1000px",
      },

      fontSize: {
        "so-big": "100px",
      },

      fontFamily: {
        Oleo: "Syne Tactile",
        Yeseva: "Yeseva One",
        Eczar: "Eczar",
        Playfair: "Playfair Display",
        Poppins: "Poppins",
      },

      width: {
        "so-wide": "75rem",
        "37.5rem": "37.5rem",
        "240px": "240px",
        "750px": "750px",
        "220px": "220px",
        "400px": "400px",
        "300px": "300px",
        form: "22rem",
        "mobile-box": "13rem",
        "mobile-container": "15rem",
        container: "17rem",
        "32rem": "32rem",
      },

      margin: {
        drop: "200px",
      },
    },
  },
  plugins: [],
};
