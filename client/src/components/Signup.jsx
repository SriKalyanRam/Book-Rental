import React from "react";
import '../Styles/Signup.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(){



       const [email,setEmail] = useState('');
        const [name,setName] = useState('');
        const [password,setPassword] = useState('');
        const navigate = useNavigate();

        const handleSubmit = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:3002/Register', {email, name, password})
            .then(result => {console.log(result);
             navigate('/Login');
        })
            .catch(err => console.log(err))
        }
    return(
        <>
    
       <div  className="signupdiv" >
                <h1>Sign UP </h1>
            <form className="form"  onSubmit={handleSubmit}>

              
                <input type="email" onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your Email" required/> <br/>
                  <input type="text"  onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" required/> <br/>
                <input type="password"  onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password" required/><br/>

                <button type="submit" >SignUp</button>
            </form>
         
            
                 <span>Already have an Account? <Link to="/Login">Login</Link></span>       

       </div>
        </>
    );
}

export default Signup;