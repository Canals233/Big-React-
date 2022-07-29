// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from "firebase/firestore";

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
export const signInWithGoogleRediect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToadd
) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToadd.forEach ((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    const res=await batch.commit();
    console.log('batch done',res);
};

export const getCategoriesAndDocuments = async ()=>{
    const collectionRef = collection(db, 'categories');
    const q=query(collectionRef)//通过集合引用查询
    const querySnapshot=await getDocs(q)//这个数据将是集合里的所有数据
    const categoriyMap=querySnapshot.docs.reduce((acc,docSnapshot)=>{
        const {title,items}=docSnapshot.data()
        acc[title.toLowerCase()]=items;
        return acc
    },{})

    return categoriyMap
}



export const creactUserDocumentFromAuth = async (
    userAuth,
    additionalInfo = {}
) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);
    //只有这个函数能实际塞入数据库，其他都只是创建了一个未载入的数据
    const userSnapshot = await getDoc(userDocRef);
    //不存在就创建一个
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            });
        } catch (error) {
            //捕获塞入数据时候的错误
            console.log("oh no !", error.message);
        }
    }
    //存在（创建后）就返回一个引用
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
};
