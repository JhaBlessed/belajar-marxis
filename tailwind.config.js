/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '760px',
            lineHeight: '1.7',
            fontSize: '1.125rem', // 18px
            h1: {
              lineHeight: '1.2',
            },
            h2: {
              lineHeight: '1.3',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
