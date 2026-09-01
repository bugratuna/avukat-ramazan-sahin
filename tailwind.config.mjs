/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: [
            {
              // currentColor: RichText her bağlamda (açık zeminde koyu metin,
              // lacivert CTA banner'ında açık metin) çevresinden renk almalı.
              '--tw-prose-body': 'currentColor',
              '--tw-prose-headings': 'currentColor',
              '--tw-prose-bold': 'currentColor',
              '--tw-prose-links': 'currentColor',
              lineHeight: '1.8',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
              h2: {
                fontWeight: 600,
                marginTop: '2em',
              },
              h3: {
                fontWeight: 600,
                marginTop: '1.8em',
              },
              'p:first-of-type': {
                fontSize: '1.15em',
                lineHeight: '1.7',
              },
            },
          ],
        },
      },
    },
  },
}

export default config
