/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./app/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            Railway: ['Raleway', 'sans-serif']
         },
         colors: {
            blueGreen: '#17a2b8',
            lightColor: '#f4f4f4',
            darkColor: '#343a40',
            dangerColor: '#dc3545',
            successColor: '#28a745'
         }
      },
   },
   plugins: [],
};