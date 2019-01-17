import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/auth'

const config = {
  // NOTE Don't worry, these are all development keys. Feel free to use them.
  apiKey: 'AIzaSyDs48Asnq0WXjS0MvLRs4V0DCrfmcEpi7s',
  authDomain: 'next-firebase-boilerplate.firebaseapp.com',
  databaseURL: 'https://next-firebase-boilerplate.firebaseio.com',
  projectId: 'next-firebase-boilerplate',
  storageBucket: '',
  messagingSenderId: '928916417074'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
