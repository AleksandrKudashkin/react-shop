import addition from '../utils/MathModule';
import React, { Component } from 'react';

class ShowAddition extends Component {
  render() {
    const { a, b } = this.props;
    return (
      <span>{addition(a, b)}</span>
    )
  }
}

export default ShowAddition;