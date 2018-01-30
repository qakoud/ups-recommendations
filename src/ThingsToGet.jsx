import React from 'react';

export default class ThingsToGet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thingsToGet: this.props.thingsToGet,
      thingToGet: '',

      // Style states
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

  // Handle submit
  handleClick = (e) => {
    e.preventDefault();
    if ( this.state.thingToGet != '' ) {
      this.postThingToGet(this.state.thingToGet);
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

  // Add the new text to the Things To Get list
  postThingToGet = (newThingToGet) => {
    this.setState({
      thingsToGet: [...this.state.thingsToGet, newThingToGet]
    });
  }

  render() {
    const thingsToGet = this.state.thingsToGet.map((thingToGet, index) => {
      return (
          <li className='thing-to-get list-item' key={index}>
            {thingToGet}
          </li>
        );
    });

    return (
      <div className='things-to-get'>
        <h3 className='place__heading'>Things to get</h3>
        <ul className='things-list list'>
          {thingsToGet}
        </ul>
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
      </div>
    );
  }
}
