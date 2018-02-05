import React from 'react';
import createNewPlace from './createNewPlace';

export default class AddNewPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlace: createNewPlace()
    }
  }

  handleChange = (e) => {
    this.setState({
      newPlace: createNewPlace({
        name: e.target.value
      })
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    if ( this.state.newPlace.name != '' ) {
      this.props.postNewPlace( this.state.newPlace );
      this.setState({
        newPlace: createNewPlace()
      });
    };
    console.log(this.state);
  }

  render() {
    return (
      <div className='add-new-place'>
        <form className='form form--post-place'>
          <div className='plus-icon'>┼</div>
          <input
            className='input input--add-place-name place-title'
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
