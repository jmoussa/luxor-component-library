import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { theme as defaultTheme } from '../../utils/theme'
import { spacing, fontSizes } from '../../utils/units'
import { isObjectEmpty } from '../../utils/helper'

const IGNORED_PROPS = ['onClick', 'onChange']

const inputConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop)
}

const inputSizeProps = {
  small: {
    fontSize: fontSizes.xsmall,
    padding: `${spacing.xsmall} ${spacing.medium}`
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
    background: defaultTheme.palette.grey[100],
    color: defaultTheme.palette.common.white
  },
  focus: {
    background: defaultTheme.palette.grey[200]
  },
  placeholder: {
    background: defaultTheme.palette.grey[100],
    color: defaultTheme.palette.common.white
  }
}

const defaultOutlineVariantProps = {
  main: {
    background: defaultTheme.palette.common.white,
    color: defaultTheme.palette.common.black
  },
  focus: {
    background: defaultTheme.palette.common.white,
    color: defaultTheme.palette.common.black
  },
  placeholder: {
    color: defaultTheme.palette.grey[300]
  }
}

const solidVariantPropsByPalette = (colorInPalette) => {
  return (
    colorInPalette && {
      main: {
        background: colorInPalette.light,
        color: colorInPalette.contrastText
      },
      focus: {
        background: colorInPalette.main
      },
      placeholder: {
        color: defaultTheme.palette.grey[300]
      }
    }
  )
}

const outlineVariantPropsByPalette = (colorInPalette) => {
  return (
    colorInPalette && {
      main: {
        background: defaultTheme.palette.common.white,
        color: colorInPalette.main
      },
      focus: {
        background: colorInPalette.main,
        color: defaultTheme.palette.common.white
      },
      placeholder: {
        color: defaultTheme.palette.grey[300]
      }
    }
  )
}

const StyledInput = ({
  placeholder,
  color,
  variant,
  disabled,
  enableElevation,
  onClick,
  onChange,
  theme,
  size,
  width,
  roundedCorners
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme
  }
  const fontSizeBySize = inputSizeProps[size]?.size
  const paddingBySize = inputSizeProps[size]?.padding
  const propsByVariant = getPropsByVariant({ variant, theme, color })
  let borderRadius = theme.shape.borderRadius
  if (roundedCorners != null) {
    borderRadius = roundedCorners
  }
  if (width == null) {
    width = '350px'
  }
  return {
    onClick,
    onChange,
    placeholder,
    borderRadius,
    width,
    outline: 'none',
    border: 'none',
    fontWeight: 500,
    cursor: 'pointer',
    opacity: disabled && 0.7,
    transition: 'all 0.2s linear',
    fontSize: inputSizeProps.medium.fontSize,
    fontFamily: theme.typography.primaryFontFamily,
    boxShadow: enableElevation && theme.shadows[1],
    ...(propsByVariant && propsByVariant.main),
    ...(paddingBySize && { padding: paddingBySize }),
    ...(fontSizeBySize && { size: fontSizeBySize }),
    '&:focus': !disabled && {
      boxShadow: enableElevation && theme.shadows[2],
      ...(propsByVariant && propsByVariant.focus)
    },
    '::placeholder': { ...(propsByVariant && propsByVariant.placeholder) }
  }
}

export const Input = styled('input', inputConfig)(StyledInput)
