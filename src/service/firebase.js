// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0n2VgbD8P5CT0sj3kr5bSHTnMVQhL_0A",
  authDomain: "projeto-guiado-ao-vivo-3a038.firebaseapp.com",
  projectId: "projeto-guiado-ao-vivo-3a038",
  storageBucket: "projeto-guiado-ao-vivo-3a038.appspot.com",
  messagingSenderId: "758796351157",
  appId: "1:758796351157:web:dc4c86f8f8923d83def0fc",
  databaseURL:'https://projeto-guiado-ao-vivo-3a038-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDatabase()

export { database }