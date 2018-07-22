import addition from './mathModule';
import React, { Component } from 'react';

class ShowAddition extends Component {
  render() {
    const props = this.props;
    return (
      <span>{addition(props.a, props.b)}</span>
    )
  }
}

export default ShowAddition;