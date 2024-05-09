import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD0CkJyQRElPiQVI8Yb1n9_QgupdZ2r3gk",
  authDomain: "react-introduction-app.firebaseapp.com",
  projectId: "react-introduction-app",
  storageBucket: "react-introduction-app.appspot.com",
  messagingSenderId: "105950561031",
  appId: "1:105950561031:web:8fcabb583d42842ccefba2"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)  

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const provider = new firebase.auth.GoogleAuthProvider()