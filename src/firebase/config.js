import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDFHV2mwJq9sr6X0jdbOtg19jMEipsLMVQ",
  authDomain: "olx-demo-aab07.firebaseapp.com",
  projectId: "olx-demo-aab07",
  storageBucket: "olx-demo-aab07.appspot.com",
  messagingSenderId: "560913382982",
  appId: "1:560913382982:web:573e30e38b42a58bd3d447",
  measurementId: "G-MF7FK24E08"
};

export default firebase.initializeApp(firebaseConfig)  