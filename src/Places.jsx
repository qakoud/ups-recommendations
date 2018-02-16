import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Place from 'Place';
import AddNewPlace from 'AddNewPlace';
import createNewPlace from './createNewPlace';
import firebase from './firebase.js';
import 'firebase/database';

export default class Places extends Component {
  constructor(props) {
    super(props);
    // -------------------------------------------------------
    this.state = {
      places: this.props.places,
      placeId: 0
    }
    // -------------------------------------------------------
    this.placesRef    = this.props.fireDB;
    this.commentsData = [];
    this.Id;
  }

  passPlaceId = (placeId) => {
    this.setState({ placeId: placeId + 1 });
  }

  // Post a new place to Firebase
  // -------------------------------------------------------
  postNewPlace = (newPlace) => {
    this.newRef = this.placesRef.push({ place: newPlace, comments: {} });
    this.Id     = this.newRef.key;
  }

  // -------------------------------------------------------
  render() {
  	const places = this.state.places.map((place, index) => {
  		return (
        <Place
          name={place.place.name}
          thingsToGet={place.place.thingsToGet}
          key={index}
          placeId={index}
          fireDB={this.props.fireDB}
          database={this.props.database}
          passPlaceId={this.passPlaceId}
          comments={this.commentsData}
        />
  		);
  	});

    return (
      <section className='app__places'>
      	{ places }

        <AddNewPlace places={places} postNewPlace={this.postNewPlace} placeId={this.state.placeId} />
      </section>
    );
  }
}
