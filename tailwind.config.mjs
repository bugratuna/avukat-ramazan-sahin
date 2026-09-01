/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--foreground)',
              '--tw-prose-headings': 'var(--foreground)',
              '--tw-prose-bold': 'var(--foreground)',
              '--tw-prose-links': 'var(--foreground)',
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
