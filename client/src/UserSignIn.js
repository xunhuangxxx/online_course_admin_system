import React, {useEffect, useState} from "react";

const UserSignIn = () =>{
    const [user, setUser] = useState({});
   
    return (
        <div className="form--centered">
          <h2>Sign In</h2>
          <form>
              <label htmlFor="emailAddress">Email Address</label>
              <input id="emailAddress" name="emailAddress" type="email" onChange={e => setUser(prevUser=> ({...prevUser, email: e.target.value}))} value={user.email}></input>
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" onChange={e => setUser(prevUser=> ({...prevUser, password: e.target.value}))} value={user.password}></input>
              <button className="button" type="submit">Sign In</button><button className="button button-secondary" onClick={e=> e.preventDefault()}>Cancel</button>
          </form>
          <p>Don't have a user account? Click here to <a href="/signup">sign up</a>!</p>
            
        
        </div>

    )
            
}

export default UserSignIn;