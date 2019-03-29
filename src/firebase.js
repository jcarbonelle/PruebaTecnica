import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDG_LXVI74AhZZiaYSbHEuOkXeCLK5MWpg",
    authDomain: "pruebandamas.firebaseapp.com",
    databaseURL: "https://pruebandamas.firebaseio.com",
    projectId: "pruebandamas",
    storageBucket: "pruebandamas.appspot.com",
    messagingSenderId: "43179455688"
  };

    if (!firebase.apps.length) {
    firebase.initializeApp(config);
    }

export default firebase