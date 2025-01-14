import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      cyan: '#00FFF8',

      blue: {
        200: '#8bacd9',
        700: '#2e405a',
        800: '#15263f',
        900: '#0d192c',
      },
    },
    fontFamily: {
      outfit: [
        'var(--font-outfit)',
        {
          fontFeatureSettings: "'liga' off, 'clig' off",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
