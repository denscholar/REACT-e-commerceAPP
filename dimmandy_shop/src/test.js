import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

firestore.collection('users').doc('RVZ21NQZUSzxINAvNqK0').collection('cartItem').doc('RvEe4Yce8VLduYRDWFgg')

firestore.doc('/users/RVZ21NQZUSzxINAvNqK0/cartItem/RvEe4Yce8VLduYRDWFgg');
firestore.collection('/users/RVZ21NQZUSzxINAvNqK0/cartItem');