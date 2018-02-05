import React from 'react';
import ReactDOM from 'react-dom';
import Place from 'Place';
import AddNewPlace from 'AddNewPlace';
import createNewPlace from './createNewPlace';

export default class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: this.props.places
    }
  }

  componentDidUpdate() {
    let el = ReactDOM.findDOMNode(this.refs.place);
    el.scrollIntoView({ block: 'end', behavior: 'smooth' });

    // Class to visually indicate this is the newly created place
    el.className += ' new-place';
    setTimeout( function() {
      el.classList.remove('new-place');
    }, 3000 );
  }

  // Post a new place to the component state
  postNewPlace = (newPlace) => {
    this.setState({
      places: [...this.state.places, newPlace]
    });

    const placesRef = firebase.database().ref('places/place/names/');
    const place = {
      name: newPlace
    };
    placesRef.push(place);

    placesRef.on('value', (snapshot) => {
      let newState = [];
      for ( let place in places ) {
        newState.push({
          name: place[name].name
        })
      }
      this.setState({
        places: newState
      })
    })
  }

  render() {
  	const places = this.state.places.map((place, index) => {
  		return (
        <Place
          name={place.name}
          distance={place.distance}
          distanceLink={place.distanceLink}
          thingsToGet={place.thingsToGet}
          comments={place.comments}
          key={index}
          ref='place'
          firebaseData={this.props.firebaseData}
        />
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
