import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { theme as defaultTheme } from '../../utils/theme'
import { spacing } from '../../utils/units'
import { isObjectEmpty } from '../../utils/helper'

const StyledBox = ({
  paddingX,
  paddingY,
  marginX,
  marginY,
  position,
  top,
  bottom,
  left,
  right,
  backgroundColor,
  backgroundImage,
  textAlign,
  width,
  display,
  roundedCorners,
  onClick,
  opacity,
  className,
  border,
  color,
  transform,
  theme,
  ...props
}) => {
  if (isObjectEmpty(theme)) {
    theme = defaultTheme
  }

  const padding = spacing[props.padding]
  let paddingTop = spacing[props.paddingTop]
  let paddingRight = spacing[props.paddingRight]
  let paddingBottom = spacing[props.paddingBottom]
  let paddingLeft = spacing[props.paddingLeft]
  if (paddingX) {
    paddingLeft = spacing[paddingX]
    paddingRight = spacing[paddingX]
  }
  if (paddingY) {
    paddingTop = spacing[paddingY]
    paddingBottom = spacing[paddingY]
  }
  const margin = spacing[props.margin]
  let marginTop = spacing[props.marginTop]
  let marginRight = spacing[props.marginRight]
  let marginBottom = spacing[props.marginBottom]
  let marginLeft = spacing[props.marginLeft]
  if (marginX) {
    marginLeft = spacing[marginX]
    marginRight = spacing[marginX]
  }
  if (marginY) {
    marginTop = spacing[marginY]
    marginBottom = spacing[marginY]
  }
  let borderRadius = spacing.none
  if (roundedCorners) {
    borderRadius = theme.shape.borderRadius
  }
  return {
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    position,
    top,
    bottom,
    left,
    right,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width,
    display,
    backgroundColor,
    backgroundImage,
    onClick,
    textAlign,
    border,
    borderRadius,
    className,
    color,
    transform,
    opacity,
    fontFamily: theme.typography.primaryFontFamily
  }
}

const IGNORED_PROPS = [
  'display',
  'width',
  'backgroundColor',
  'textAlign',
  'backgroundImage',
  'opacity',
  'className',
  'transform',
  'color',
  'border'
]

const boxConfig = {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !IGNORED_PROPS.includes(prop)
}

export const Box = styled('div', boxConfig)(StyledBox)
