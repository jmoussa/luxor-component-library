import { spacing } from './units'

const white = '#fcfcfc'
const black = '#000501'
const palette = {
  common: {
    black,
    white
  },
  primary: {
    main: '#090C9B',
    light: '#3066BE',
    contrastText: white
  },
  secondary: {
    main: '#B4C5E4',
    light: '#FBFFF1',
    contrastText: black
  },
  error: {
    main: '#C04ABC',
    light: '#D9BBF9',
    contrastText: white
  },
  grey: {
    100: '#8a878f',
    200: '#635f69',
    300: '#3c3744',
    400: '#302c36'
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
