import React from "react";
import '../Styles/Login.css'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";



function Login(){
const [email,setEmail]= useState('');
const[password,setPassword]= useState('');
const navigate= useNavigate();
const [errmsg,seterrmsg] = useState('');
const { login } = useAuth();

const handleLogin= (e) =>{
    e.preventDefault()
    axios.post("http://localhost:3002/Login",{email,password})
    .then((result) => {
        if(result.data.message === "Login successful"){
               login(result.data.user, result.data.token);
               if(result.data.user.role==="admin"){
                navigate("/Dashboard")
               }else{
              navigate('/Home');
               }
        }else {
          seterrmsg(result.data.message);
      }})
    .catch(err => console.log(err));
}

     
    return(
        <>
      
       <div  className="Logindiv" >
                <h1>Log in</h1>
            <form onSubmit={handleLogin}>

                <input onChange={(e) => setEmail(e.target.value)}   placeholder="Enter your Email"/> <br/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" /><br/>

                <button type="submit">Login</button>
            </form>
                 {errmsg ? <p  style={{ color: 'red' }}>{errmsg}</p> : null}
            
                 <span>Forgot Your Password?</span>       

       </div>
      </>  
    );
}

export default Login;