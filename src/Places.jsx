import React from 'react';
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

  render() {
  	const places = this.state.places.map((place, index) => {
  		return (
  			<div className='places'>
          <Place
            name={place.name}
            distance={place.distance}
            distanceLink={place.distanceLink}
            thingsToGet={place.thingsToGet}
            comments={place.comments}
            key={index}
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
