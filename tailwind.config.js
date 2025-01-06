/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'image1': "url('https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png')",
        'image2': "url('https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png')",
        'image3': "url('https://assets.leetcode.com/explore/cards/introduction-to-the-beginners-guide/img-1652222288.png')",
        'image4': "url('https://assets.leetcode.com/explore/cards/top-151-interview-questions/img')",
        'image5': "url('https://assets.leetcode.com/explore/cards/cheatsheets/img-1674082113.png')",
        'image6': "url('https://assets.leetcode.com/explore/cards/google/img')",
        'image7': "url('https://assets.leetcode.com/explore/cards/dynamic-programming/img.png')",
        'image8': "url('https://assets.leetcode.com/explore/cards/fun-with-arrays/img')",
        'image9': "url('https://assets.leetcode.com/explore/cards/sql-language/img-1657328656.png')",
    },
    screens: {
      'phone500': '500px',
      'phone550': '550px',
      'phone600': '600px',
      'phone700': '700px',
      'phone850': '850px',
      'phone950': '950px',
      'phone1000': '1000px',
      'phone1050': '1050px',
      'phone1100': '1100px',
      'phone1200': '1200px',
    },
  },
  plugins: [],
}
}