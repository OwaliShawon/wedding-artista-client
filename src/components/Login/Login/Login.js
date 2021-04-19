import React, { useState } from 'react';
import firebaseConfig from '../firebaseConfig';
import firebase from "firebase/app";
import "firebase/auth";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
    });

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleAuth = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                setLoggedInUser({
                    isSignIn: true,
                    name: result.user.displayName,
                    email: result.user.email,
                })
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }


    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser({
                isSignIn: false,
                name: '',
                email: '',
            })
            console.log('Sign-out successful')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="mx-auto">
            <h1>Name: {loggedInUser.name}</h1>
            <div className="d-flex justify-content-center m-5 p-3">
                <button className="bt btn-primary p-3 m-3" onClick={handleGoogleAuth}>LOGIN</button>
                <br />
                <button className="bt btn-primary p-3 m-3" onClick={handleSignOut}>LOGOUT</button>
            </div>
        </div>

    );
};

export default Login;