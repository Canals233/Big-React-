// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGzr9Hs1Jhno2G3Wg2ZD5ApKqibhWOjMs",
    authDomain: "crwn-clothing-db-cfaa6.firebaseapp.com",
    projectId: "crwn-clothing-db-cfaa6",
    storageBucket: "crwn-clothing-db-cfaa6.appspot.com",
    messagingSenderId: "786047323818",
    appId: "1:786047323818:web:66315145c86625eafa8ad3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creactUserDocumentFromAuth = async (userAuth) => {
    const userDocRef=doc(db,'users',userAuth.uid)
    console.log(userDocRef);

    const userSnapshot= await getDoc(userDocRef)
    //不存在就创建一个
    if(!userSnapshot.exists()){
        const {displayName,email}=userAuth
        const createdAt=new Date();
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('oh no !',error.message);
        }
    }
    return userDocRef
};
