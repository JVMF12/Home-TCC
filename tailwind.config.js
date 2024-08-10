/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botaoSelecionado: '#56AF54',
        naoSelecionado: '#82C27C',
        fundoHeader: '#87BFDD',
        fundoSite: '#EDEEEF',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
         ultraWidest: '0.25em',
      },

    },
  },
  plugins: [],
}

