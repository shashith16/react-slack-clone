import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAVLziYGQTSKHR33Mp9m7dkzA__7RYGlRE",
  authDomain: "slack-clone-yt-d74b7.firebaseapp.com",
  projectId: "slack-clone-yt-d74b7",
  storageBucket: "slack-clone-yt-d74b7.appspot.com",
  messagingSenderId: "452756236109",
  appId: "1:452756236109:web:95b3d4a83f7127904ff904",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
