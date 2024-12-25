/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
      },
      colors:{
        bgColor: "#8d93ab",
        primary: "#791f89",
        darkPrimary: "#37113e",
        textHover: "#c4c5c3"
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
