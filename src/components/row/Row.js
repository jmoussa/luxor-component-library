import React from 'react'
import { Box } from '../box/Box'

export const Row = ({ children, space, ...props }) => {
  return (
    <Box display='flex' {...props}>
      {React.Children.map(children, (child, index) => {
        if (index > 0) {
          return React.cloneElement(child, {
            marginLeft: space,
            width: '100%'
          })
        }

        return React.cloneElement(child, { width: '100%' })
      })}
    </Box>
  )
}
