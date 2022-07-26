import { useState } from "react";

import FormInput from "../form-input/form-input";
import "./sign-in-form.scss";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import {
    emailSignInStart,
    googleSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const val=useContext(UserContext)

    const signInWithGoogle = () => {
        dispatch(googleSignInStart());
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
            dispatch(emailSignInStart(email, password));

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
                        登录
                    </Button>
                    <Button
                        type={"button"}
                        buttonType={"google-sign-in"}
                        onClick={signInWithGoogle}
                    >
                        谷歌登录
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;


