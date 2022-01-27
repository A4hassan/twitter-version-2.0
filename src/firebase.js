import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyDfaXEQSPGPlxoWC8tzbyacLnN9bUHpY7M",
    authDomain: "twitter-clone-6c9bc.firebaseapp.com",
    databaseURL: "https://twitter-clone-6c9bc-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-6c9bc",
    storageBucket: "twitter-clone-6c9bc.appspot.com",
    messagingSenderId: "419086094479",
    appId: "1:419086094479:web:84fb0d649569176b7b20fa",
    measurementId: "G-B2XN4MXTL0"
};

export const createUserProfileDocument = async(userAuth,additionalData)=>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if(!snapShot.exists){
    const {username,email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        username,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating User" + error.message);
    }
  }
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
const firestore = firebase.firestore();
export default firestore;

