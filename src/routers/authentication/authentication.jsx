

import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import './auth.scss'
const Authentication = () => {
    // useEffect(()=>{
    //     async function getRsponseFromRedirect(){
    //         const { user } = await getRedirectResult(auth);
    //         creactUserDocumentFromAuth(user);
    //     }
    //     getRsponseFromRedirect()
    // }, []);



    return (
        <div className="authentication-container">


            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </div>
    );
};

export default Authentication;
