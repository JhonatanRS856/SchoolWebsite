/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'color-primary':'var(--color-primary)',
        'color-success':'var(--color-success)',
        'color-warning':'var(--color-warning)',
        'color-danger':'var(--color-danger)',
        'color-danger-variant':'var(--color-danger-variant)',
        'color-light':'var(--color-light)',
        'color-bg':'var(--color-bg)',
        'color-bg1':'var(--color-bg1)',
        'color-bg2':'var(--color-bg2)'
      },
    },
  },
  plugins: [],
}

