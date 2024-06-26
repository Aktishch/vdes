const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, matchComponents, theme }) => {
  addComponents({
    '.dialog': {
      color: theme('colors.black.DEFAULT'),
      backgroundColor: theme('colors.white.DEFAULT'),
    },
  })
  matchComponents(
    {
      dialog: (size) => {
        return { width: size }
      },
    },
    {
      values: {
        xs: 'var(--tw-content-xs)',
        sm: 'var(--tw-content-sm)',
        md: 'var(--tw-content-md)',
        lg: 'var(--tw-content-lg)',
        xl: 'var(--tw-content-xl)',
      },
    }
  )
})
