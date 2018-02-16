import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyCmYWQ6TMZfUsptYx3RuYxZPDxkeai64-s",
  authDomain: "ups-recommendations.firebaseapp.com",
  databaseURL: "https://ups-recommendations.firebaseio.com",
  projectId: "ups-recommendations",
  storageBucket: "ups-recommendations.appspot.com",
  messagingSenderId: "30938780035"
};
firebase.initializeApp(config);

export default firebase;
