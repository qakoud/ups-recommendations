import React, { Component } from 'react';

export default class RemoveThingToGet extends Component {
  constructor(props) {
    super(props);
    this.thingToRemove = this.props.thingToRemove;
  }

  handleClick = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <button className='delete delete-thing-to-get' onClick={this.handleClick}>Remove</button>
    )
  }

}
