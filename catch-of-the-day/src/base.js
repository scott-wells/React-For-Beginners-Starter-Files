// this application uses 'Firebase' as our cloud database - not local to the machine
// we import Rebase - a React thing that interfaces with Firebase
// we also import 'firebase'
import Rebase from 're-base';
import firebase from 'firebase';


// this variable used firebase.initializeApp() to store some important app info for authentication
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkK3rqE-eHTJ5yTeKgUu3rXY6953DVuV8",
    authDomain: "catch-of-the-day-scott-wells.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-scott-wells.firebaseio.com",
});

// returns our database to Rebase
const base = Rebase.createClass(firebaseApp.database());

// this is a named export
// exports all that important app info
export { firebaseApp };

// exports our Rebase database
export default base;