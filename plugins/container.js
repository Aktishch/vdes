const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    '.container': {
      '--tw-container-padding': '40px',
      '--tw-container-content': '100vw - 32px',
      padding:
        'var(--tw-container-padding) calc(50% - ((var(--tw-container-content)) / 2))',
      [`@media (min-width: ${theme('screens.xs')})`]: {
        '&-xs': {
          '--tw-container-content': 'var(--tw-content-xs)',
        },
      },
      [`@media (min-width: ${theme('screens.sm')})`]: {
        '--tw-container-padding': '50px',
        '--tw-container-content': 'var(--tw-content-sm)',
      },
      [`@media (min-width: ${theme('screens.md')})`]: {
        '--tw-container-padding': '60px',
        '--tw-container-content': 'var(--tw-content-md)',
      },
      [`@media (min-width: ${theme('screens.lg')})`]: {
        '--tw-container-padding': '70px',
        '--tw-container-content': 'var(--tw-content-lg)',
      },
      [`@media (min-width: ${theme('screens.xl')})`]: {
        '--tw-container-padding': '80px',
        '--tw-container-content': 'var(--tw-content-xl)',
        '&-distance': {
          '--tw-container-width': 'var(--tw-content-xl)',
          '--tw-container-distance': '1.25rem',
          '--tw-container-content':
            'calc(var(--tw-container-width) + (var(--tw-container-distance) * 2))',
          margin: 'var(--tw-container-distance)',
          borderRadius: 'var(--tw-container-distance)',
        },
      },
    },
  })
})
