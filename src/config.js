import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAAZnpfx9STuG9spl3aOFbxkeKLxwhVjSk",
    authDomain: "luvvvbirds.firebaseapp.com",
    databaseURL: "https://luvvvbirds.firebaseio.com",
    projectId: "luvvvbirds",
    storageBucket: "luvvvbirds.appspot.com",
    messagingSenderId: "916602562522",
    appId: "1:916602562522:web:5085f005b26877b7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;