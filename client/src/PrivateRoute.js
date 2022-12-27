import React from "react";
import {Route, Navigate} from "react-router-dom";
import {Consumer} from "./Context"


const PrivateRoute = ({children}) => {

      return (
        <Consumer>
          {(userInfo)=> {
            
            return (
               userInfo.emailAddress && userInfo.emailAddress !== "" ? children : <Navigate to="/signin" />
            )
          }}          
        </Consumer>
      )   
}

export default PrivateRoute;