/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    zIndex: {
      '999': '999',
    },

    boxShadow: {
      'header1': 'rgba(58, 61, 66, 0.06) 0px 1px 0px',
      'header5':  'rgba(0, 0, 0, 0.05) 0px 2px 8px -2px',
    },

    colors: {
      'location': 'rgb(24, 28, 32)',
    },

    height: {
      '4.5': '4.5rem',
    },

    screens : {
      "xs" : "320px",
      "sm" : "600px",
      "md" : "960px",
      "lg" : "1280px",
      "xs" : "1536px",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily : {
        "vrg" : "Vazirmatn-Regular",
        "vmd" : "Vazirmatn-Medium",
        "vsb" : "Vazirmatn-SemiBold",
        "vb" : "Vazirmatn-Bold",
        "vxb" : "Vazirmatn-ExtraBold"
      }
    },
  },
  plugins: [],
}
