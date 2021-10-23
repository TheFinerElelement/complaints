import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyAux4y3FicCTmQOlvKWE3JwiMaVQ1xskgI",
  authDomain: "class58-5066f.firebaseapp.com",
  databaseURL: "https://class58-5066f-default-rtdb.firebaseio.com",
  projectId: "class58-5066f",
  storageBucket: "class58-5066f.appspot.com",
  messagingSenderId: "1096913055406",
  appId: "1:1096913055406:web:d546f773bea3cbf7ec073f"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

