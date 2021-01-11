import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { theme as defaultTheme } from '../../utils/theme'
import { spacing, fontSizes } from '../../utils/units'
import { isObjectEmpty } from '../../utils/helper'

const IGNORED_PROPS = ['color']

const buttonConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop)
}

const buttonSizeProps = {
  small: {
    fontSize: fontSizes.xsmall,
    padding: `${spacing.xsmall} ${spacing.small}`
  },
  medium: {
    fontSize: fontSizes.small,
    padding: `${spacing.small} ${spacing.medium}`
  },
  large: {
    fontSize: fontSizes.medium,
    padding: `${spacing.medium} ${spacing.large}`
  }
}

const getPropsByVariant = ({ variant, color, theme }) => {
  const colorInPalette = theme.palette[color]

  const variants = {
    outline: colorInPalette
      ? outlineVariantPropsByPalette(colorInPalette)
      : defaultOutlineVariantProps,
    solid: colorInPalette
      ? solidVariantPropsByPalette(colorInPalette)
      : defaultSolidVariantProps
  }

  return variants[variant] || variants.solid
}

const defaultSolidVariantProps = {
  main: {
    border: `1px solid ${defaultTheme.palette.grey[100]}`,
    backgroundColor: defaultTheme.palette.grey[100],
    color: defaultTheme.palette.common.black
  },
  hover: {
    border: `1px solid ${defaultTheme.palette.grey[200]}`,
    backgroundColor: defaultTheme.palette.grey[200]
  }
}

const defaultOutlineVariantProps = {
  main: {
    border: `1px solid ${defaultTheme.palette.common.black}`,
    backgroundColor: defaultTheme.palette.common.white,
    color: defaultTheme.palette.common.black
  },
  hover: {
    border: `1px solid ${defaultTheme.palette.common.black}`,
    backgroundColor: defaultTheme.palette.common.white,
    color: defaultTheme.palette.common.black
  }
}

const solidVariantPropsByPalette = (colorInPalette) => {
  return (
    colorInPalette && {
      main: {
        border: `1px solid ${colorInPalette.main}`,
        backgroundColor: colorInPalette.main,
        color: colorInPalette.contrastText
      },
      hover: {
        border: `1px solid ${colorInPalette.light}`,
        backgroundColor: colorInPalette.light
      }
    }
  )
}

const outlineVariantPropsByPalette = (colorInPalette) => {
  return (
    colorInPalette && {
      main: {
        border: `1px solid ${colorInPalette.main}`,
        backgroundColor: defaultTheme.palette.common.white,
        color: colorInPalette.main
      },
      hover: {
        border: `1px solid ${colorInPalette.light}`,
        backgroundColor: colorInPalette.main,
        color: defaultTheme.palette.common.white
      }
    }
  )
}

const StyledButton = ({
  color,
  size,
  variant,
  enableElevation,
  disabled,
  onClick,
  theme
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme
  }

  const fontSizeBySize = buttonSizeProps[size]?.fontSize
  const paddingBySize = buttonSizeProps[size]?.padding
  const propsByVariant = getPropsByVariant({ variant, theme, color })

  return {
    onClick,
    fontWeight: 500,
    cursor: 'pointer',
    opacity: disabled && 0.7,
    transition: 'all 0.2s linear',
    padding: buttonSizeProps.medium.padding,
    fontSize: buttonSizeProps.medium.fontSize,
    borderRadius: theme.shape.borderRadius,
    fontFamily: theme.typography.fontFamily,
    boxShadow: enableElevation && theme.shadows[1],
    ...(propsByVariant && propsByVariant.main),
    ...(paddingBySize && { padding: paddingBySize }),
    ...(fontSizeBySize && { fontSize: fontSizeBySize }),
    '&:hover': !disabled && {
      boxShadow: enableElevation && theme.shadows[2],
      ...(propsByVariant && propsByVariant.hover)
    }
  }
}

export const Button = styled('button', buttonConfig)(StyledButton)
