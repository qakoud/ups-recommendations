import createNewPlace from './createNewPlace';
import firebase from './firebase.js';

function newPost() {
  // A post entry.
  var postData = createNewPlace();

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref('places').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/places/' + newPostKey] = postData;

  // return firebase.database().ref().on('value', function(snapshot) {

  // });
}

export default newPost;
