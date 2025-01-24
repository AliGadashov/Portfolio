/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {

      screens: {
        'custom-xl-top': { max: '1350px', min: '1280px' },
        'custom-xl-about': { max: '1610px', min: '1280px' },
        'custom-lg-about': { max: '900px', min: '768px' },
        'custom-ls-about': { max: '768px', min: '600px' },
        'custom-md-skill': { min: '870px'},
        'custom-lg-skill': { min: '1150px'},
        'custom-sm-sh': { max: '450px'},
      },

      keyframes: {
        bounceIcon: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },

      animation: {
        'bounce-icon': 'bounceIcon 0.5s ease-in-out infinite',
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
      },

      colors:{
        bgColor: "#8d93ab",
        primary: "#791f89",
        darkPrimary: "#37113e",
        textHover: "#c4c5c3",
        loadingBg: "#f1d6ad"

      }
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('tailwind-scrollbar-hide'),

    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
        });
      });
    }),

    plugin(function ({ addVariant }) {
      addVariant('webkit', '&::webkit');
    }),

    plugin(function ({ addVariant }) {
      addVariant('edge', '&::-ms-viewport');
    }),

    plugin(function ({ addVariant }) {
      addVariant('ios', '&:nth-child(n+0)');
    }),

    plugin(function ({ addVariant }) {
      addVariant('opera', '&::o-user-agent');
    }),

    plugin(function ({ addVariant }) {
      addVariant('chrome', '&:chrome-only');
    }),
  ],
};
