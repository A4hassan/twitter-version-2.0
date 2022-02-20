import React, {useState} from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {auth} from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    
    const loginToast = () => {

        toast("Login Succesfully!", {
            position:"top-center"
        });
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const Login = async (e)=>{
        e.preventDefault();
        try {
            const {user} = await auth.signInWithEmailAndPassword(email,password);
            if(user){
                console.log(user);
                history.push({
                    pathname:'/home',
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container my-5" style={{width:'30%',backgroundColor:'lightgray'}}>
            <h2>Sign in</h2>
            <form onSubmit={Login}>
                
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} name="email" value={email} className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} name="password" value={password} className="form-control" id="exampleFormControlInput3" placeholder="Password" />
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={loginToast}>Sign-In</button>
            </form>
            <Link to='/signup'>Dont have an Account! Register yourself</Link>

            <ToastContainer />
        </div>
    );
};

export default Signin;
