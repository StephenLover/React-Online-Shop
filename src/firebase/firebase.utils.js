import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCVNbkZp6JPEyb6juZoI_Ko0RtgRJRCL-Y",
  authDomain: "crwn-clothing-db-5e035.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-5e035.firebaseio.com",
  projectId: "crwn-clothing-db-5e035",
  storageBucket: "",
  messagingSenderId: "568550086020",
  appId: "1:568550086020:web:94a2b1e51490788d"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;