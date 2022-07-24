import { useState } from "react";
import {
    signInWithGooglePopup,
    creactUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import "./sign-in-form.scss";
import Button from "../button/button";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const val=useContext(UserContext)

    const signInWithGoogle = async () => {
        signInWithGooglePopup();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("密码错误");
                    break;
                case "auth/user-not-found":
                    alert("没有此账户");
                    break;
                default:
                    console.log(error);
                    break;
            }
        }
    };

    return (
        <div className="sign-up-container">
            <h2>您已有账户？</h2>
            <span> 用邮箱和密码登录您的账户</span>
            <form onSubmit={handleSubmit}>
                {/* <label>您的邮箱</label> */}
                <FormInput
                    label="您的邮箱"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                {/* <label>您的密码</label> */}
                <FormInput
                    label="您的密码"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit" onClick={handleSubmit}>
                        {" "}
                        登录
                    </Button>
                    <Button
                        type={'button'}
                        buttonType={"google"}
                        onClick={signInWithGoogle}
                    >
                        用谷歌账户登录
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;

// const SignUpForm = () => {
//     return (
//         <div>
//             <h1> Sign up with your email and password</h1>
//             <form onSubmit={()=>{}}>
//                 <label>Display Name</label>
//                 <input type='text' required />
//                 <label>Email</label>
//                 <input type='email' required />
//                 <label>Password</label>
//                 <input type='password' required />
//                 <label>Confirm PassWord</label>
//                 <input type='password' required />
//                 <button type="submit"> Submit</button>
//             </form>
//         </div>
//     );
// };
