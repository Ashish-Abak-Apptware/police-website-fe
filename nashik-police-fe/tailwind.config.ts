import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontSize: {
            'P1-Regular-Inter': [
              '24px',
              {
                fontWeight: 400,
                lineHeight: 'auto'
              }
            ],
            'P2-Extra-Light-Inter': [
              '18px',
              {
                fontWeight: 400,
                lineHeight: '23px'
              }
            ],
            'P3-Extra-Light-Inter': [
              '16px',
              {
                fontWeight: 400,
                lineHeight: '26px'
              }
            ],
            'P4-Extra-Light-Inter': [
              '14px',
              {
                fontWeight: 400,
                lineHeight: '14px'
              }
            ],
            'P5-Extra-Light-Inter': [
              '12px',
              {
                fontWeight: 400,
                lineHeight: 'auto'
              }
            ],
            'HL-Regular-Khand': [
              '96px',
              {
                fontWeight: 400,
                lineHeight: 'auto'
              }
            ],
            'H1-Regular-Khand': [
              '72px',
              {
                fontWeight: 400,
                lineHeight: 'auto'
              }
            ],
            'H2-Medium-Khand': [
              '60px',
              {
                fontWeight: 500,
                lineHeight: '73px'
              }
            ],
            'H3-Regular-Khand': [
              '48px',
              {
                fontWeight: 400,
                lineHeight: 'auto'
              }
            ],
            'H3-Medium-Khand': [
              '48px',
              {
                fontWeight: 500,
                lineHeight: 'auto'
              }
            ],
            'H4-Medium-Khand': [
              '34px',
              {
                fontWeight: 500,
                lineHeight: '40px'
              }
            ],
            'H5-Regular-Khand': [
              '30px',
              {
                fontWeight: 400,
                lineHeight: 'auto'
              }
            ],
            'H6-Regular-Khand': [
              '24px',
              {
                fontWeight: 400,
                lineHeight: '29px'
              }
            ],
            'H6-Medium-Khand': [
              '24px',
              {
                fontWeight: 500,
                lineHeight: 'auto'
              }
            ],
            'SH1-Regular-Khand': [
              '20px',
              {
                fontWeight: 400,
                lineHeight: 'auto'
              }
            ],
      },
      colors: {
        'natural-gray-10': '#171717',
        'Natural-Gray-20': '#303030',
        'Natural-Gray-30': '#4A4A4A',
        'Natural-Gray-40': '#636363',
        'Natural-Gray-50': '#7D7D7D',
        'Natural-Gray-60': '#969696',
        'Natural-Gray-70': '#B0B0B0',
        'Natural-Gray-80': '#C9C9C9',
        'Natural-Gray-90': '#E3E3E3',
        'Natural-Gray-100': '#F5F5F5',
        'Primary-Blue-10':'#010028',
        'Primary-Blue-20':'#02015B',
        'Primary-Blue-30':'#03018D',
        'Primary-Blue-40':'#0502C0',
        'Primary-Blue-50':'#0602F2',
        'Primary-Blue-60':'#2E2BFD',
        'Primary-Blue-70':'#605DFD',
        'Primary-Blue-80':'#9190FE',
        'Primary-Blue-90':'#C3C2FE',
        'Primary-Blue-100':'#EBEBFF',
        'Secondary-Lime-Yellow':'#F9DB01',
        'Secondary-Orange':'#FCB23A',
        'Secondary-Pumpkin-Orange':'#FF6600',
        'Secondary-Brown':'#582B20',
        'Grey-100':'#F5F5F5',
        'Grey-70':'#B9B6C3',

      },
      backgroundImage: {
        'Linear-Yellow-Gradient': 'linear-gradient(180deg,#F9DB01 0%, #F9DB01  100%)',
        'Linear-Black-1-Gradient': 'linear-gradient(180deg,#000000 0%, #000000  100%)',
        'hero-section-bg': 'url("/image/hero-bg.svg")',
        'header4-bg':'url("/image/header/header4.png")',
        'header8-bg':'url("/image/header/header8.png")',
        'header7-bg':'url("/image/header/header7.svg")',
        'header-bottom':'url("/image/hero-bottom.svg")',
        'bg-gradient':'url("/image/bg-gradient.svg")',
      }
    },
  },
  plugins: [],
}

export default config
