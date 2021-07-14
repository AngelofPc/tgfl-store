import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC7y7fx_Wgbj2ppSy0ThJVlmNnoJ5NtyrE',
  authDomain: 'ace-s-web.firebaseapp.com',
  projectId: 'ace-s-web',
  storageBucket: 'ace-s-web.appspot.com',
  messagingSenderId: '201030006624',
  appId: '1:201030006624:web:00198cba25c349d3b59005',
  measurementId: 'G-MF3CPK8Z89',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
