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
         fontSize: {
            'xsm': '0.85rem',
         },
         lineHeight: {
            xsm: '1.25rem',
         },
         padding: {
            18: '4.5rem',
         },
         colors: {
            blueGreen: '#17a2b8',
            lightColor: '#f4f4f4',
            darkColor: '#343a40',
            dangerColor: '#dc3545',
            successColor: '#28a745',
            instagramColor: '#e1306c',
         }
      },
   },
   plugins: [],
};