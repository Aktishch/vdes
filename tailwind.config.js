/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.html', './src/ts/**/*.ts'],
  darkMode: 'class',
  corePlugins: {
    container: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: '459.98px',
      sm: '575.98px',
      md: '767.98px',
      lg: '991.98px',
      xl: '1365.98px',
      xxl: '2559.98px',
    },
    constants: {
      xs: 28,
      sm: 36,
      md: 44,
      lg: 50,
      xl: 56,
      xxl: 64,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: {
        DEFAULT: '#EC0000',
        dark: '#C80000',
      },
      second: {
        DEFAULT: '#EB4747',
      },
      black: {
        DEFAULT: '#2B2B2B',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      grey: {
        DEFAULT: '#B7B7B7',
      },
      dark: {
        DEFAULT: '#000000',
      },
      blue: {
        DEFAULT: '#298CFA',
      },
      yellow: {
        DEFAULT: '#FFCC00',
      },
      green: {
        DEFAULT: '#00C838',
      },
    },
    fontFamily: {
      alt: 'var(--tw-font-alt)',
      base: 'var(--tw-font-base)',
    },
    gridColumn: {
      1: 'span 1',
      2: 'span 2',
      3: 'span 3',
      4: 'span 4',
      5: 'span 5',
      6: 'span 6',
      7: 'span 7',
      8: 'span 8',
      9: 'span 9',
      10: 'span 10',
      11: 'span 11',
      12: 'span 12',
    },
    gridRow: {
      1: 'span 1',
      2: 'span 2',
      3: 'span 3',
      4: 'span 4',
      5: 'span 5',
      6: 'span 6',
      7: 'span 7',
      8: 'span 8',
      9: 'span 9',
      10: 'span 10',
      11: 'span 11',
      12: 'span 12',
    },
    extend: {
      content: {
        auto: '""',
      },
      fontSize: {
        mini: '0.625rem',
      },
      borderRadius: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [
    require('./plugins/container'),
    require('./plugins/dialog'),
    require('./plugins/card'),
    require('./plugins/pack'),
    require('./plugins/picture'),
    require('./plugins/input'),
    require('./plugins/button'),
    require('./plugins/switch'),
    require('./plugins/animation'),
  ],
}
