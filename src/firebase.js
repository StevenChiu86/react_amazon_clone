import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCykkh5FHTXCEvsDBzxO7f1EVjkLPNeeqE",
  authDomain: "challenge-e6dfb.firebaseapp.com",
  databaseURL: "https://challenge-e6dfb.firebaseio.com",
  projectId: "challenge-e6dfb",
  storageBucket: "challenge-e6dfb.appspot.com",
  messagingSenderId: "660856240028",
  appId: "1:660856240028:web:9a357ab9748fbce0f73a59",
  measurementId: "G-S1KDN0M44G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
