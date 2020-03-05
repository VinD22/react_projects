import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDXOOV41tY5Noo5gZdr7Ksiibg-sg7HRtM",
    authDomain: "react-notes-webapp.firebaseapp.com",
    databaseURL: "https://react-notes-webapp.firebaseio.com",
    projectId: "react-notes-webapp",
    storageBucket: "react-notes-webapp.appspot.com",
    messagingSenderId: "677437447990"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
