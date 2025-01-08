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
        'image10': "url('https://assets.leetcode.com/users/images/93ad444a-6425-413b-9094-8a613d7be5ab_1734667147.858678.png')",
        'image11': "url('https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg')",
        'image12': "url('https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png')",
        'image13': "url('https://support.leetcode.com/hc/theming_assets/01HZKM7BF3RJ24JXMS3608EC5Y')",
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