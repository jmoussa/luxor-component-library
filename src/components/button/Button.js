import React, { Component } from 'react'
import { Button as StyledButton } from './style'

class Button extends Component {
  render() {
    return (
      <StyledButton
        variant={this.props.variant}
        color={this.props.color}
        size={this.props.size}
        {...this.props}
      />
    )
  }
}
export default Button
