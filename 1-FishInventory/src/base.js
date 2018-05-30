import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "firebase-api-key-goes-here",
    authDomain: "firebase-auth-domain-goes-here",
    databaseURL: "database-url-goes-here"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;