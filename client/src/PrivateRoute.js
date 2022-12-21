import React from "react";
import {Route, Navigate} from "react-router-dom";
import {Consumer} from "./Context"


const PrivateRoute = ({children}) => {

      return (
        <Consumer>
          {(userInfo)=> {
            return (
               userInfo.email !== "" ? children : <Navigate to="/signin" />
            )
          }}          
        </Consumer>
      )   
}

export default PrivateRoute;