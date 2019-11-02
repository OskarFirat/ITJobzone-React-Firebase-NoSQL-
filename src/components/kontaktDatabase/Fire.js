import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCK4EjHHiV0xUMQQ5TqMbdxGcXNjThrQNY",
  authDomain: "brukere-864de.firebaseapp.com",
  databaseURL: "https://brukere-864de.firebaseio.com",
  projectId: "brukere-864de",
  storageBucket: "",
  messagingSenderId: "551602662732",
  appId: "1:551602662732:web:fd583c72c645ffb32e33e9"
  };
const fire = firebase.initializeApp(config);
export default fire;