import React, {useEffect, useState} from "react";
import {Buffer} from 'buffer';
import { useNavigate} from "react-router-dom";


const UserSignIn = () =>{
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState("");

    let navigate = useNavigate();

    const signIn = (email, password) =>{

        fetch('http://localhost:5000/api/users', 
        {
            method : "GET", 
            headers : {
                'Authorization': `Basic ${Buffer.from(`${email}:${password}`).toString('base64')}`
            },
        })
        .then(res => {
            if(res.status === 401){
              return res.json();              
            } else{
              return {};
            }   
        })
        .then(res => {
            if(res.errors){
              setErrorMsg(res.errors.join(", "));        
            }
        })
    }

    const handleSignIn = (e) => {
        e.preventDefault();

        signIn(user.email, user.password);
    }


    return (
        <div className="form--centered">
          <h2>Sign In</h2>
          <p>{errorMsg}</p>
          <form>
              <label htmlFor="emailAddress">Email Address</label>
              <input id="emailAddress" name="emailAddress" type="email" onChange={e => setUser(prevUser=> ({...prevUser, email: e.target.value}))} value={user.email}></input>
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" onChange={e => setUser(prevUser=> ({...prevUser, password: e.target.value}))} value={user.password}></input>
              <button className="button" onClick={handleSignIn}>Sign In</button><button className="button button-secondary" onClick={()=> navigate('/')}>Cancel</button>
          </form>
          <p>Don't have a user account? Click here to <a href="/signup">sign up</a>!</p>
            
        
        </div>

    )
            
}

export default UserSignIn;