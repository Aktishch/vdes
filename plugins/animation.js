const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  ({ addComponents, theme }) => {
    let anim = {
      '.anim': {
        transition: '300ms ease',
      },
    }
    Object.entries(theme('animOccurrence')).map(([key, value]) => {
      anim = {
        ...anim,
        [`.anim-${key}:not([data-anim="show"])`]: {
          transform: `${value}`,
          visibility: 'hidden',
          opacity: 0,
        },
      }
    })
    addComponents(anim)
  },
  {
    theme: {
      animOccurrence: {
        fade: 'none',
        increase: 'scale(0)',
        decrease: 'scale(1.3)',
        circle: 'rotate(1turn)',
        up: 'translateY(3.5rem)',
        down: 'translateY(-3.5rem)',
        left: 'translateX(3.5rem)',
        right: 'translateX(-3.5rem)',
      },
    },
  }
)
