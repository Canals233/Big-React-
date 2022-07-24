import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    creactUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import './sign-up-form.scss'
import Button from "../button/button";


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
        alert('创建成功')
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("两次输入的密码不一致");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            //捕获创建授权时的错误，如重复使用



            await creactUserDocumentFromAuth(user,{displayName})
            resetFormFields()
        } catch (error) {
            if(error.code==='auth/email-already-in-use'){
                alert('该邮箱已经被使用')
            }
            console.log(error, "oh no!");
        }
    };

    return (
        <div className="sign-up-container">
            <h2>您还没有账户？</h2>
            <span> 用邮箱和密码注册您的账户</span>
            <form onSubmit={handleSubmit}>
                {/* <label>您希望显示的名称</label> */}
                <FormInput
                    label='您希望显示的名称'
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
                {/* <label>您的邮箱</label> */}
                <FormInput
                    label='您的邮箱'
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                {/* <label>您的密码</label> */}
                <FormInput
                    label='您的密码'
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                {/* <label>再次输入您的密码</label> */}
                <FormInput
                    label='再次输入您的密码'
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit"> 注册</Button>
            </form>
        </div>
    );
};

export default SignUpForm;

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
