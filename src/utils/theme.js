import { spacing } from './units'

const white = '#fcfcfc'
const black = '#000501'
const palette = {
  common: {
    black,
    white
  },
  primary: {
    main: '#36A378',
    light: '#087CA7',
    contrastText: white
  },
  secondary: {
    main: '#2D3047',
    // light: '#d99d52',
    light: '#E0A458',
    contrastText: white
  },
  error: {
    main: '#C04ABC',
    light: '#D9BBF9',
    contrastText: white
  },
  grey: {
    100: '#aa9fb1',
    200: '#887f8e',
    300: '#776f7c',
    400: '#444047'
  }
}

const shadows = {
  0: 'none',
  1: '0px 5px 10px rgba(0, 0, 0, 0.12)',
  2: '0px 8px 30px rgba(0, 0, 0, 0.24)'
}

const typography = {
  primaryFontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
  secondaryFontFamily: 'serif'
}

const shape = {
  borderRadius: spacing.xsmall
}

export const theme = {
  palette,
  shadows,
  typography,
  shape
}
