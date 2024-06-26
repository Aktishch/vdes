const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    '.form': {
      display: 'flex',
      flexDirection: 'column',
      '&-label': {
        display: 'flex',
        flexDirection: 'column',
      },
      '&-wrapper': {
        display: 'block',
        position: 'relative',
        width: '100%',
      },
      '&-icon': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '3rem',
        height: '100%',
        pointerEvents: 'none',
        '&-pointer': {
          pointerEvents: 'auto',
          cursor: 'pointer',
        },
        '&-left': {
          left: 0,
        },
        '&-right': {
          right: 0,
        },
      },
      '&-error': {
        fontSize: theme('fontSize.xs'),
        color: theme('colors.red.DEFAULT'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '-1rem',
        height: '1rem',
        opacity: 0,
        visibility: 'hidden',
        transition: '300ms ease',
      },
    },
  })
})
