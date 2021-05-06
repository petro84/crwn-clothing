import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDKeJ0rjUYg6BmUb-5Xswfu1jvXaFqiOGI',
  authDomain: 'crwn-db-80323.firebaseapp.com',
  projectId: 'crwn-db-80323',
  storageBucket: 'crwn-db-80323.appspot.com',
  messagingSenderId: '329866320238',
  appId: '1:329866320238:web:6f9c39852829ccd802497f',
  measurementId: 'G-BFM4WHG887',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;