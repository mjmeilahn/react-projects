import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJWtAM8XWTIDrHH8GWmiep_T-7uJCosxE",
    authDomain: "catch-of-the-day-meilahn.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-meilahn.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;