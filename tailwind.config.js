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
      xs: 459.98 + 'px',
      sm: 575.98 + 'px',
      md: 767.98 + 'px',
      lg: 991.98 + 'px',
      xl: 1365.98 + 'px',
      xxl: 2559.98 + 'px',
    },
    constants: {
      xs: '28px',
      sm: '36px',
      md: '40px',
      lg: '45px',
      xl: '56px',
      xxl: '64px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: {
        DEFAULT: '#af1a4c',
      },
      second: {
        DEFAULT: '#d7a751',
      },
      black: {
        DEFAULT: '#000000',
      },
      white: {
        DEFAULT: '#ffffff',
      },
      gray: {
        DEFAULT: '#b2b2b2',
      },
      grey: {
        DEFAULT: '#f6f7f9',
      },
      dark: {
        DEFAULT: '#303030',
      },
      red: {
        DEFAULT: '#be1b1b',
      },
      green: {
        DEFAULT: '#27ae60',
      },
    },
    fontFamily: {
      alt: 'var(--font-alt)',
      base: 'var(--font-base)',
    },
    lineHeight: {
      1: 1.1,
      2: 1.2,
      3: 1.3,
      4: 1.4,
      5: 1.5,
      6: 1.6,
      7: 1.7,
      8: 1.8,
      9: 1.9,
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
    require('./plugins/form'),
    require('./plugins/input'),
    require('./plugins/button'),
    require('./plugins/switch'),
    require('./plugins/animation'),
  ],
}
