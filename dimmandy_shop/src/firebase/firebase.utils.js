import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
    apiKey: "AIzaSyAzK5LY_bEGl9t7Tw5cohx1RLGgR4xgBNg",
    authDomain: "dimmandydb.firebaseapp.com",
    projectId: "dimmandydb",
    storageBucket: "dimmandydb.appspot.com",
    messagingSenderId: "626510121848",
    appId: "1:626510121848:web:9fbe7cf7522f00b9a7168d",
    measurementId: "G-29QC479KQB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth(); //since we have access to the auth method, we also need to export it in case there are places we need to use it.

  export const firestore = firebase.firestore(); //same as above

// // //   setting up the google auth
//   const provider = new firebase.auth.GoogleAuthProvider(); //this gives access to the google auth provider class from the authentication library
//   provider.setCustomParameters({ prompt: 'select_account' }) //this will always trigger the google popup whenever we want to sign in with google 
//   export const signInWithGoogle = () => auth.signInWithPopup(provider);

// //   finally, export the firebase default in case we want the whole library


// export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
export default firebase;
