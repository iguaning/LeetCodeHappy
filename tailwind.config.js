module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 900px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp')
  ],
}
