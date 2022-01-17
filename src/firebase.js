import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBcK1VPLFsCrstuKea6BrEsQ5XF9r_PXx4",
    authDomain: "ig-reels-dbbd6.firebaseapp.com",
    projectId: "ig-reels-dbbd6",
    storageBucket: "ig-reels-dbbd6.appspot.com",
    messagingSenderId: "358376911530",
    appId: "1:358376911530:web:2055c12b77e19c3dda16d3",
    measurementId: "G-E0P7SNE7CC"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;