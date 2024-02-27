import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { createThemes } from "tw-colors";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],

  darkMode: ['class'],

  theme: {

    container: {
      center: true,
      padding: "1rem"
    },

    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'handrawn': ['Delicious Handrawn', 'cursive'],
    },

    extend: {
      colors: {
        primary: {
          ...colors.orange,
          "DEFAULT": '#F58220',
        },
      },

      spacing: {
        15: '60px',
        18: '72px'
      },

      zIndex: {
        '60': '60',
        '70': '70',
      },
    },
  },

  plugins: [
    require('preline/plugin'),
    require('./custom.plugin'),
    createThemes({
      light: {
        default: colors.slate,
        primary: {
          ...colors.orange,
          "DEFAULT": '#F58220',
        },
      },

      dark: {
        default: {
          '50': '#020617',
          '100': '#0f172a',
          '200': '#1e293b',
          '300': '#334155',
          '400': '#475569',
          '500': '#64748b',
          '600': '#94a3b8',
          '700': '#cbd5e1',
          '800': '#e2e8f0',
          '900': '#f1f5f9',
          '950': '#f8fafc'
        },
        primary: {
          ...colors.orange,
          "DEFAULT": '#F58220',
        },
      },
    }, {
      defaultTheme: 'light'
    })
  ],
}
export default config
