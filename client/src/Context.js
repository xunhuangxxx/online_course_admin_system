import React , { useState, createContext, useContext, useEffect } from "react";;

export const AuthUser = React.createContext();

export const Provider = AuthUser.Provider;
export const Consumer = AuthUser.Consumer;
