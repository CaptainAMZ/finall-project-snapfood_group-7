/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

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
