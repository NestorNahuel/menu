import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebase = initializeApp({
  apiKey: 'AIzaSyA94cc4idXTwLMM48LUiX3rohkhijBTGY0',
  authDomain: 'ram-firebase-test.firebaseapp.com',
  projectId: 'ram-firebase-test',
  storageBucket: 'ram-firebase-test.appspot.com',
  messagingSenderId: '1097411446808',
  appId: '1:1097411446808:web:662390f23c1662146b1b6d',
})

export const firestore = getFirestore(firebase)
