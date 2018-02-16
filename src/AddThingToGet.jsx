import React, { Component } from 'react';

export default class AddThingToGet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thingsToGet: [],
      thingToGet: '',

      active: false,
      hasValue: false
    }
  }

  handleChange = (e) => {
    this.setState({
      thingToGet: e.target.value
    });

    e.target.value === '' ? this.setState({ active: false, hasValue: false }) : this.setState({ active: true, hasValue: true });
  }

  handleClick = (e) => {
    e.preventDefault();
    if ( this.state.thingToGet != '' ) {
      this.props.postThingToGet(this.state.thingToGet);
      this.setState({
        thingToGet: '',
        active: false
      });
    } else {
      this.setState({
        hasValue: true
      });
    }
  }

  render() {
    return (
      <form className='form form--thing-to-get'>
        <input
          type='text'
          className={ this.state.hasValue ? 'input input--thing-to-get has-value' : 'input input--thing-to-get' }
          placeholder='Add a thing to get from this place'
          value={this.state.thingToGet}
          onChange={this.handleChange}
        />
        <span className={this.state.active ? 'post-hint active' : 'post-hint'}>↵</span>
        <input type='submit' className='submit submit--thing-to-get' onClick={this.handleClick} />
      </form>
    );
  };

}
