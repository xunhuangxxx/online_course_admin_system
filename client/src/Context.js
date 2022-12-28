import React from "react";;

export const AuthUser = React.createContext();

export const Provider = ({children, value}) => {

    return (
        <AuthUser.Provider value={value}>{children}</AuthUser.Provider>
    )
}
export const Consumer = AuthUser.Consumer;
