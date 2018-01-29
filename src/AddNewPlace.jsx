import React from 'react';

export default class AddNewPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlace: { 
        name: '',
        distance: '10 minutes',
        thingsToGet: [],
        comments: []
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      newPlace: {
        name: e.target.value,
        thingsToGet: [],
        comments: []
      }
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    if ( this.state.newPlace.name != '' ) {
      this.props.postNewPlace( this.state.newPlace );
      this.setState({
        newPlace: {
          name: '',
          distance: '',
          thingsToGet: [],
          comments: []
        }
      });
    }
  }

  render() {
    return (
      <div className='add-new-place'>
        <form className='form form--post-place'>
          <input 
            className='add-place-name' 
            placeholder='Add a new place'
            value={this.state.newPlace.name} 
            name='name' 
            type='text' 
            onChange={this.handleChange} />

          <input className='submit--post-place' type='submit' onClick={this.handleClick} value='Post place' />
        </form>

        <button className='button--add-new-place'>Add new place</button>
      </div>
    );
  }
}
