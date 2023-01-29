/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./**/*.{html,md}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}



    // './_includes/**/*.html',
    // './_layouts/**/*.html',
    // './_posts/*.md',
    // './*.html',
    // './*.md'
