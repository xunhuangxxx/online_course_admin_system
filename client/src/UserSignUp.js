import React, {useEffect, useState} from "react";

const UserSignUp = () => {
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState("");
    
    fetch('http://localhost:5000/api/users', {method : "POST"})
    .then(res => res.json())
    .then(res => {
        if(res.errors){       
            setErrorMsg(res.errors.join(", "));        
        }
    })



    return (
        <div className="form--centered">
           <h2>Sign Up</h2>
           <p>{errorMsg}</p>
           <form>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" onChange={e => setUser(prevUser=> ({...prevUser, firstName: e.target.value}))} value={user.firstName} />
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" onChange={e => setUser(prevUser=> ({...prevUser, lastName: e.target.value}))} value={user.lastName}  />
              <label htmlFor="emailAddress">Email Address</label>
              <input id="emailAddress" name="emailAddress" type="email" onChange={e => setUser(prevUser=> ({...prevUser, email: e.target.value}))} value={user.email}  />
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" onChange={e => setUser(prevUser=> ({...prevUser, password: e.target.value}))} value={user.password}  />
              <button className="button" type="submit">Sign Up</button><button className="button button-secondary" onClick={e => e.preventDefault()}>Cancel</button>              
           </form>
           <p>Already have a user account? Click here to <a href="./signin">sign in</a>!</p>
      </div>
    )
}

export default UserSignUp;