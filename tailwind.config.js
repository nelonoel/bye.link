const defaultTheme = require('tailwindcss/defaultTheme')

const focusVisible = () => ({ addVariant, e }) => {
  addVariant('focus-visible', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `focus-visible${separator}${className}`
      )}.focus-visible, .${e(
        `focus-visible${separator}${className}`
      )}:focus-visible`
    })
  })
}

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Libre Baskerville', ...defaultTheme.fontFamily.serif],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      screens: {
        sm: '500px',
        md: '720px',
        lg: '960px',
        xl: '1280px',
      },
      width: {
        'primary-sidebar': '240px',
        'secondary-sidebar': '320px',
      },
    },
  },
  variants: {
    background: [
      'responsive',
      'hover',
      'focus',
      'focus-visible',
      'active',
      'group-hover',
    ],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-visible'],
    outline: ['focus', 'focus-visible'],
  },
  plugins: [focusVisible()],
}
