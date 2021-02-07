import React, { Component } from 'react'
import { Input as StyledInput } from './style'

class Input extends Component {
  render() {
    return (
      <StyledInput
        paceholder={this.props.placeholder || null}
        color={this.props.color || 'default'}
        size={this.props.size || 'medium'}
        variant={this.props.variant || 'solid'}
        roundedCorners={this.props.roundedCorners || null}
        {...this.props}
      ></StyledInput>
    )
  }
}
export default Input
