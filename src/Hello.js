import React, { Component } from 'react';

class Red extends Component {
  render() {
    const children = this.props.children;
    return (
      <span style={{color: 'red'}}>{children}</span>
    )
  }
}

class Hello extends Component {
  render() {
    return (
      <div>Hello, <Red>World!</Red></div>
    )
  }
}

export default Hello;