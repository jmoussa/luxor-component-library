import React from 'react'
import { Box } from '../box/Box'

export const Stack = ({ children, space, ...props }) => {
  return (
    <Box {...props}>
      {React.Children.map(children, (child, index) => {
        if (index > 0) {
          return React.cloneElement(child, { marginTop: space })
        }

        return child
      })}
    </Box>
  )
}
