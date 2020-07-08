import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBgQbu2BFc4p772MMz3IdD1wjJukm9OSG4',
  authDomain: 'crwn-db-d1d31.firebaseapp.com',
  databaseURL: 'https://crwn-db-d1d31.firebaseio.com',
  projectId: 'crwn-db-d1d31',
  storageBucket: 'crwn-db-d1d31.appspot.com',
  messagingSenderId: '748725271221',
  appId: '1:748725271221:web:2c4b7ae62fc858b855dcfc',
  measurementId: 'G-G2ZFV1HHEN',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('Error Creating User:', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
