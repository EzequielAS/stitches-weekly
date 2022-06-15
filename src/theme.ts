import { createStitches, PropertyValue, keyframes, createTheme } from '@stitches/react'

export const { styled } = createStitches({
    theme: {
      colors: {
        primary: 'white',
        onPrimary: 'black',
        gray500: 'hsl(206,10%,76%)',
        blue500: 'hsl(206,100%,50%)',
        purple500: 'hsl(252,78%,60%)',
        green500: 'hsl(148,60%,60%)',
        red500: 'hsl(352,100%,62%)',
      },
      space: {
        1: '5px',
        2: '10px',
        3: '15px',
      },
      fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px',
        4: '50px'
      },
    //   fonts: {
    //     untitled: 'Untitled Sans, apple-system, sans-serif',
    //     mono: 'Söhne Mono, menlo, monospace',
    //   },
    //   fontWeights: {},
    //   lineHeights: {},
    //   letterSpacings: {},
    //   sizes: {},
    //   borderWidths: {},
    //   borderStyles: {},
    //   radii: {},
    //   shadows: {},
    //   zIndices: {},
    //   transitions: {},
    },
    utils: {
      mx: (value: PropertyValue<'margin'>) => ({ 
        marginLeft: value, 
        marginRight: value 
      }),
    },
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
  });

  export const scaleUp = keyframes({
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(1.5)' },
  });

  export const darkTheme = createTheme({
    colors: {
      primary: 'black',
      onPrimary: 'white'
    },
  })