import React, { Component } from 'react';
import createNewPlace from './createNewPlace';

export default class AddNewPlace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPlace: createNewPlace(),
      hasValue: false
    }
  }

  handleChange = (e) => {
    this.setState({
      newPlace: createNewPlace({
        name: e.target.value,
        placeId: this.props.placeId
      })
    });

    e.target.value === '' ? this.setState({hasValue: false}) : this.setState({hasValue: true})
  }

  handleClick = (e) => {
    e.preventDefault();
    if ( this.state.newPlace.name != '' ) {
      this.props.postNewPlace( this.state.newPlace );
      this.setState({
        newPlace: createNewPlace()
      });
    };
  }

  render() {
    return (
      <div className='add-new-place'>
        <form className='form form--post-place'>
          <div className='plus-icon'>┼</div>
          <input
            className={this.state.hasValue ? 'input input--add-place-name place-title input-has-value' : 'input input--add-place-name place-title'}
            placeholder='Add a new place'
            value={this.state.newPlace.name}
            name='name'
            type='text'
            onChange={this.handleChange} />

          <input
            className='submit submit--post-place'
            type='submit'
            onClick={this.handleClick}
            value='Post place' />
        </form>
      </div>
    );
  }
}
