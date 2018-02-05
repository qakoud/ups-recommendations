import React from 'react';
import Places from 'Places';
import Utilities from 'Utilities';
import 'scss/App.scss';

const firebaseDB = firebase.database();
const fireRef = firebaseDB.ref('places');

const placeData = [
  {
    name: 'Bricco',
    distance: '5 minutes walk',
    distanceLink: 'https://www.google.com/maps/dir/133+Portland+St,+Boston,+MA+02114/Bricco+Salumeria+%26+Pasta+Shop,+Board+Alley,+Boston,+MA/@42.3630185,-71.0602111,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e3708fdb3b055f:0xf26859ec9f1ddb20!2m2!1d-71.0609772!2d42.3638827!1m5!1m1!1s0x89e37088c57c084f:0xb9586ee3deb4ca31!2m2!1d-71.0548644!2d42.36298!3e3',
    thingsToGet: [
      'The Italian: The meats!',
      'The Panino: A caprese with prosciutto',
      'Leftovers! (Two lunches per sandwich, unless you’re really hungry)'
    ],
    comments: [
      'It’s not the restaurant on Hanover; it’s the sandwich shop in the alley.',
      'They don’t know how to divide a sandwich in half evenly, but it’s ok.'
    ]
  },
  {
    name: 'Salumeria Italiana',
    distance: '8 minutes walk',
    distanceLink: '',
    thingsToGet: [
      'The Italian: The meats!',
      'The Panino: A caprese with prosciutto',
      'Leftovers! (Two lunches per sandwich, unless you’re really hungry)'
    ],
    comments: [
      'It’s not the restaurant on Hanover; it’s the sandwich shop in the alley.',
      'They don’t know how to divide a sandwich in half evenly, but it’s ok.'
    ]
  },
  {
    name: 'Whole Foods',
    distance: '10 minutes walk',
    distanceLink: '',
    thingsToGet: [
      'Salad bar & hot bar things — mix n’ match items that make no sense and cost a lot',
      'All of the groceries'
    ],
    comments: [
      'Whoa!'
    ]
  }
]


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { placeData: placeData };
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

        <Places places={this.state.placeData} firebaseData={fireRef} />
      </main>
    );
  }
}
