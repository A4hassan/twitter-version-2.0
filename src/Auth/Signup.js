import React, {useState} from "react";
import {auth,createUserProfileDocument} from "../firebase";

const Signup = () => {
    
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');


    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(password !== confirm_password){
            alert('Password do not match');
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user,{username});

        } catch (error) {
            console.log(error);
        }
    }
 
    return (

        <div className="container my-5" style={{width:'30%',backgroundColor:'lightgray'}}>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">name</label>
                    <input type="text" onChange={e=>setUserName(e.target.value)} name="username" value={username} className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" onChange={e=>setEmail(e.target.value)} name="email" value={email} className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" onChange={e=>setPassword(e.target.value)} name="password" value={password} className="form-control" id="exampleFormControlInput3" placeholder="Password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Confirm Password</label>
                    <input type="password" onChange={e=>setConfirm_password(e.target.value)} name="confirm_password" value={confirm_password} className="form-control" id="exampleFormControlInput4" placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign-Up</button>
            </form>

        </div>
    )
};

export default Signup;
