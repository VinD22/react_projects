import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
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
