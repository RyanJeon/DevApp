import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAPE93IumJmvd_IXMYZyE-BmU0IOf8D9vI",
  authDomain: "dev-70141.firebaseapp.com",
  databaseURL: "https://dev-70141.firebaseio.com",
  projectId: "dev-70141",
  storageBucket: "dev-70141.appspot.com",
  messagingSenderId: "11090169768"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');
