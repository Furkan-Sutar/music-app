import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import svgToDataUri from 'mini-svg-data-uri';

// Type 'flattenColorPalette' as any
const flattenColorPalette: any = require('tailwindcss/lib/util/flattenColorPalette');

// Define the plugin function with explicit types for `addBase` and `theme`
const addVariablesForColors = plugin(function ({
  addBase,
  theme,
}: {
  addBase: (styles: Record<string, string | Record<string, string>>) => void;
  theme: (path: string) => Record<string, string>;
}) {
  const allColors = flattenColorPalette(theme('colors'));
  
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, String(val)])
  ) as Record<string, string>;

  addBase({
    ':root': newVars,
  });
});

const DotBackground = plugin(function ({
  matchUtilities,
  theme,
}: {
  matchUtilities: (
    utilities: Record<string, (value: string) => any>,
    options?: Partial<{
      respectPrefix: boolean;
      respectImportant: boolean;
      type: 'color';
      values: Record<string, string>;
      modifiers: 'any' | Record<string, string>;
      supportsNegativeValues: boolean;
    }>
  ) => void;
  theme: (path: string) => Record<string, string>;
}) {
  matchUtilities(
    {
      'bg-grid': (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      'bg-grid-small': (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      'bg-dot': (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    {
      values: flattenColorPalette(theme('backgroundColor')),
      type: 'color',  // Set the 'type' field correctly
    }
  );
});

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'meteor-effect': 'meteor 5s linear infinite',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors, DotBackground],
};

export default config;
