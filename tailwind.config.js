/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    height: {
      "nav-size-center": "72px",
      "nav-size-not-center": "112px",
      "services-height": "106px",
    },

    fontSize: {
      "scales-default": "1rem",
      "scales-caption": "0.75rem",
      "scales-xlarge": "1.5rem",
      "scales-xxlarge": "1.75rem",
      "scales-large": "1.125rem",
      "scales-body": "0.875rem",
      "scales-tiny": "0.625rem",
    },

    colors: {
      "black-alphaMedium": "#0000003D",
      "surface-main": "#F9FAFB",
      "surface-dark": "#EBEDF0",
      "surface-light": "#FFFFFF",
      "surface-overlay": "#3A3D42",
      "surface-alphaLight": "rgba(249,250,251,0.06)",
      "surface-alphaMedium": "rgba(249,250,251,0.12)",
      "surface-alphaHigh": "rgba(249,250,251,0.24)",
      "carbon-main": "#3A3D42",
      "carbon-dark": "#181B1F",
      "carbon-light": "#53565C",
      "carbon-overlay": "#FFFFFF",
      "carbon-alphaLight": "rgba(58,61,66,0.06)",
      "carbon-alphaMedium": "rgba(58,61,66,0.12)",
      "carbon-alphaHigh": "rgba(24,28,32,0.2)",
      "accent-main": "#FF00A6",
      "accent-dark": "#E00096",
      "accent-light": "#FF38AC",
      "accent-overlay": "#FFFFFF",
      "accent-alphaLight": "rgba(255,0,166,0.06)",
      "accent-alphaMedium": "rgba(255,0,166,0.12)",
      "accent-alphaHigh": "rgba(255,0,166,0.24)",
      "accent2-main": "#00B862",
      "accent2-dark": "#008542",
      "accent2-light": "#18C775",
      "accent2-overlay": "#FFFFFF",
      "accent2-alphaLight": "rgba(0,133,66,0.06)",
      "accent2-alphaMedium": "rgba(0,133,66,0.1)",
      "accent2-alphaHigh": "rgba(0,133,66,0.2)",
      "alert-main": "#FA284B",
      "alert-dark": "#E00025",
      "alert-light": "#FF3D5D",
      "alert-overlay": "#FFFFFF",
      "alert-alphaLight": "rgba(250,40,75,0.04)",
      "alert-alphaMedium": "rgba(250,40,75,0.12)",
      "alert-alphaHigh": "rgba(250,40,75,0.24)",
      "attention-main": "#FACB0F",
      "attention-dark": "#9E6900",
      "attention-light": "#FFD83D",
      "attention-overlay": "#000000",
      "attention-alphaLight": "rgba(250,203,15,0.1)",
      "attention-alphaMedium": "rgba(250,203,15,0.2)",
      "attention-alphaHigh": "rgba(250,203,15,0.36)",
      "inactive-main": "#EDEFF0",
      "inactive-dark": "#A6AAAD",
      "inactive-light": "#EDEFF0",
      "inactive-overlay": "#EDEFF0",
      "inactive-alphaLight": "#EDEFF0",
      "inactive-alphaMedium": "#EDEFF0",
      "inactive-alphaHigh": "#EDEFF0",
      "white2": "#f4f4f4",
      "gray1-color": "#9d9fa4",
      "gray2-color": "#ddd",
      "gray3-color": "#babac0",
      "gray4-color": "#a0a0a5",
      "gray5-color": "#a3a3a3",
      "gray6-color": "#e6e6e6",
      "golden-yellow-color": "#fd0",
      "tangerine-yellow-color": "#ffce00",
      "snappExpress-color": "#ff661f",
      "modal-backdrop": "#40404066",
    },
    lineHeight: {
      "lineHeight-default": "1.5rem",
      "lineHeight-caption": "1rem",
      "lineHeight-xlarge": "2rem",
      "lineHeight-xxlarge": "2.25rem",
      "lineHeight-large": "1.75rem",
      "lineHeight-body": "1.25rem",
      "lineHeight-tiny": "0.75rem"
    },
    spacing: {
      "spacing-0": "0rem",
      "spacing-1": "0.5rem",
      "spacing-2": "1rem",
      "spacing-3": "1.5rem",
      "spacing-4": "2rem",
      "spacing-5": "2.5rem",
      "spacing-6": "3rem",
      "spacing-7": "3.5rem",
      "spacing-8": "4rem",
      "spacing-9": "4.5rem",
      "spacing-10": "5rem",
      "spacing-11":".25rem",
      "spacing-12" : ".625rem",
      "spacing-13": ".125rem",
      "spacing-14": ".6rem",
      "spacing-15": "10.5625rem",
    },

    borderWidth: {
      "borders-xs": "0.09375rem",
      "borders-md": "0.1875rem",
      "borders-lg": "0.375rem",
    },
    boxShadow: {
      "shadows-inset": "inset 0px 1px 6px rgba(0,0,0,0.04)",
      "shadows-small": "0px 1px 0px rgba(58,61,66,0.06),0px 2px 8px -2px rgba(0,0,0,0.05)",
      "shadows-medium": "0px 1px 0px rgba(58,61,66,0.06),0px 4px 16px -8px rgba(0,0,0,0.2)",
      "shadows-high": "0px 1px 0px rgba(58,61,66,0.06),0px 8px 32px -16px rgba(0,0,0,0.3)",
      "shadows-modal": "0px 2px 8px rgba(0,0,0,0.08),0px 8px 32px rgba(0,0,0,0.16)",
    },

    screens: {
      "xs": "320px",
      "sm": "600px",
      "md": "960px",
      "lg": "1280px",
      "xs": "1536px",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "vrg": "Vazirmatn-Regular",
        "vmd": "Vazirmatn-Medium",
        "vsb": "Vazirmatn-SemiBold",
        "vb": "Vazirmatn-Bold",
        "vxb": "Vazirmatn-ExtraBold"
      },

      fontSize: {
        vsm: '0.625rem',
        '.75':'.75rem',
        vm:'.875rem'
        
      },

      minWidth: {
        '29': '29vw',
        '9.375':'9.375rem',
        '5.5':'5.5rem'
        
        
      },

      maxWidth:{
        '29': '29vw',
        '20':'10vw'
      },
      borderRadius:{
        'lgg': '.625rem'
      },
      zIndex: {
        '999': '999'
      },
      width: {
        '29': '29vw'
      }
        
    },
  },
  plugins: [],
}




