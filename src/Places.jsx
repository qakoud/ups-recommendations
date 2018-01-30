import React from 'react';
import ReactDOM from 'react-dom';
import Place from 'Place';
import AddNewPlace from 'AddNewPlace';

export default class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: this.props.places
    }
  }

  postNewPlace = (newPlace) => {
    this.setState({
      places: [...this.state.places, newPlace]
    });
  }

  componentDidUpdate() {
    let el = ReactDOM.findDOMNode(this.refs.place);
    el.scrollIntoView({block: 'end', behavior: 'smooth'});

    // Class to visually indicate this is the newly created place
    el.className += ' new-place';
    setTimeout( function() {
      el.classList.remove('new-place');
    }, 3000 );
  }

  render() {
  	const places = this.state.places.map((place, index) => {
  		return (
  			<div className='places' id='places'>
          <Place
            name={place.name}
            distance={place.distance}
            distanceLink={place.distanceLink}
            thingsToGet={place.thingsToGet}
            comments={place.comments}
            key={index}
            ref='place'
          />
        </div>
  		);
  	});

    return (
      <section className='app__places'>
      	{places}

        <AddNewPlace places={places} postNewPlace={this.postNewPlace} />
      </section>
    );
  }
}
