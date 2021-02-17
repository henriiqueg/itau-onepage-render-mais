module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#FF236E',
      secondary: '#6E69AC',
      white: '#FFF',
    },
    extend: {
      backgroundImage: (theme) => ({
        'app': "url('../assets/img/bg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
