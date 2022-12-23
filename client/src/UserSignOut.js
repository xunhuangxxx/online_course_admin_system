import React from "react";
import { redirect } from "react-router-dom";
import { Consumer } from "./Context";


const UserSignOut = () => {

    <Consumer>
       {(userInfo) => {
            return (
            userInfo.email = "",
            userInfo.password = ""   
            )        
       }}
    </Consumer>

}

export default UserSignOut;