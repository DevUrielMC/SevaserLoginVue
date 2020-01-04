
import firebase from'firebase'
import firestore from 'firebase/firestore'


  const firebaseConfig = {
    apiKey: "AIzaSyDBiq7bp2cFgk9KBpm34lp337IL7g0BDLQ",
    authDomain: "sevaserloginvue.firebaseapp.com",
    databaseURL: "https://sevaserloginvue.firebaseio.com",
    projectId: "sevaserloginvue",
    storageBucket: "sevaserloginvue.appspot.com",
    messagingSenderId: "59073975660",
    appId: "1:59073975660:web:6fe6676f9a23b0ef6ccf49",
    measurementId: "G-Z6PTZRY7JT"
  };

  const firebaseApp = firebase.inicializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots : true});

  export default firebaseApp.firestore();