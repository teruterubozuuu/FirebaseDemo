import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7SISrz_jFAST2n6sDPlhBPFV6ecgh1fc",
  authDomain: "reactproject-a8556.firebaseapp.com",
  projectId: "reactproject-a8556",
  storageBucket: "reactproject-a8556.firebasestorage.app",
  messagingSenderId: "122570771750",
  appId: "1:122570771750:web:77219c789d4af4a62105e7",
  measurementId: "G-DTDC7JMNY8"
};
  initializeApp(firebaseConfig);

  const db = getFirestore();

  export {db}