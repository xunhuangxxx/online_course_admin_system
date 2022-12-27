import React from "react";
import { Navigate } from "react-router-dom";
import {useCookies} from "react-cookie"


const UserSignOut = ({setContext}) => {
    const [, , removeCookie] = useCookies();
    removeCookie('user');
    setContext({});
    return (
        
         <Navigate to="/" replace={true} />
        
    )
}

export default UserSignOut;