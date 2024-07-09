const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    '.switch': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      userSelect: 'none',
      color: theme('colors.primary.DEFAULT'),
      border: `1px solid ${theme('colors.grey.DEFAULT')}`,
      transition: '200ms linear',
      appearance: 'none',
      cursor: 'pointer',
      '&:disabled': {
        pointerEvents: 'none',
        opacity: 0.5,
      },
      '@media (hover)': {
        '&:hover': {
          boxShadow: `0 0 0 4px ${formatColor({
            mode: 'rgba',
            color: parseColor(theme('colors.grey.DEFAULT')).color,
            alpha: 0.4,
          })}`,
        },
      },
      '&-checkbox': {
        minWidth: '1.5rem',
        width: '1.5rem',
        height: '1.5rem',
        borderRadius: theme('borderRadius.sm'),
        '&::after': {
          content: theme('content.auto'),
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: theme('colors.white.DEFAULT'),
          borderRadius: theme('borderRadius.inherit'),
          opacity: 0,
          transition: 'opacity 100ms linear',
          mask: 'url("../img/pictures/checkbox.svg") no-repeat center / 1rem',
        },
        '&:checked': {
          borderColor: theme('colors.current'),
          backgroundColor: theme('colors.current'),
          '&::after': {
            opacity: 1,
          },
        },
      },
      '&-radio': {
        minWidth: '1.25rem',
        width: '1.25rem',
        height: '1.25rem',
        borderRadius: theme('borderRadius.full'),
        '&::after': {
          content: theme('content.auto'),
          display: 'block',
          width: '0.75rem',
          height: '0.75rem',
          backgroundColor: theme('colors.current'),
          borderRadius: theme('borderRadius.inherit'),
          transform: 'scale(0)',
          transition: 'opacity 100ms linear, transform 100ms linear',
          opacity: 0,
        },
        '&:checked': {
          '&::after': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
      '&-checkbox, &-radio': {
        '&::before': {
          content: theme('content.auto'),
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '100%',
          height: '100%',
          visibility: 'hidden',
          transform: 'translate(-50%, -50%) scale(0)',
          borderRadius: theme('borderRadius.inherit'),
          backgroundColor: theme('colors.current'),
          transition: 'opacity 300ms linear, transform 400ms linear',
          pointerEvents: 'none',
        },
        '&:checked': {
          '&::before': {
            visibility: 'visible',
            opacity: 0,
            transform: 'translate(-50%, -50%) scale(3)',
          },
        },
      },
      '&-toggle': {
        minWidth: '5rem',
        width: '5rem',
        height: '2.188rem',
        borderRadius: theme('borderRadius.full'),
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          marginBlock: 'auto',
          height: '1.5rem',
          borderRadius: theme('borderRadius.full'),
        },
        '&:not(:checked)::after': {
          left: '0.25rem',
          right: '3.125rem',
          backgroundColor: theme('colors.grey.DEFAULT'),
          transition: 'left 500ms ease, right 400ms ease 200ms',
        },
        '&:checked::after': {
          left: '3.125rem',
          right: '0.25rem',
          backgroundColor: theme('colors.current'),
          transition:
            'left 400ms ease 200ms, right 500ms ease, background-color 350ms ease -100s',
        },
      },
    },
  })
})
