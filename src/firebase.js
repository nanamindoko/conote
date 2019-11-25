import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCt4eWmG4Ve_7873RBnOY38i0WeAuHP0wo",
  authDomain: "cs473-conote.firebaseapp.com",
  databaseURL: "https://cs473-conote.firebaseio.com",
  projectId: "cs473-conote",
  storageBucket: "cs473-conote.appspot.com",
  messagingSenderId: "728656222999",
  appId: "1:728656222999:web:d2a38aa32b4593c70cb552",
  measurementId: "G-VZJTZTTK0Y"
};
firebase.initializeApp(config);

export default firebase;
