import {
    signInWithGooglePopup,
    creactUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user)
        const userDocRef=await creactUserDocumentFromAuth(user)
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
};

export default SignIn;
