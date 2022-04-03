module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors:{
        magenta: '#EC8FD0'
      }, 
      backgroundImage: {
        'furniture': "url('../public/images/furniture.jpg')",
      },

      boxShadow: {
        'overshadow': '2px 2px 2px pink'
      },
     
      height:{
        '720': '48rem',
        'mobile-height':'500px'
      },

      fontSize:{
        'so-big':'100px'
      },

      fontFamily:{
        'Oleo': 'Syne Tactile',
        'Yeseva': 'Yeseva One',
        'Eczar': 'Eczar',
        'Playfair': 'Playfair Display'
        
      },
      
      width:{
        'so-wide':'75rem'
      },
      
    },
  },
  plugins: [],
}
