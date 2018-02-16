import React, { Component } from 'react';
import Places from 'Places';
import Utilities from 'Utilities';
import firebase from './firebase.js';
import 'firebase/database';
import 'scss/App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { placeData: [] };

    // Firebase references
    // -------------------------------------------------------
    this.database       = firebase.database();
    this.placesRef      = this.database.ref('places');
    this.commentsRef    = this.database.ref('comments');

    // Read/Write to Firebase
    // -------------------------------------------------------
    this.places        = this.state.placeData;
    // -------------------------------------------------------
    this.placesRef.on('child_added', snapshot => {
      this.places.push({
        place: snapshot.val().place,
      });

      this.setState({
        placeData: this.places
      });
    });
    // -------------------------------------------------------
  }

  render() {
    return (
      <main className='app-container pg-layout pg-layout-lg'>
        <header className='app__header padding padding--lg'>
          <div className='header__content'>
            <h1 className='header__name'>Ups Recommendations</h1>
            <p className='header__desc'>Curated list of food places around Upstatement.</p>
          </div>
        </header>

        <Utilities />

        <Places
          places    ={this.state.placeData}
          fireDB    ={this.placesRef}
          database  ={this.database}
        />
      </main>
    );
  }
}
