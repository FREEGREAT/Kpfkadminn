import React from 'react'
import { useContext } from 'react'
import { useState, createContext } from 'react'

export const AuthContext = createContext(null)


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = (user) => {
        setUser(user)
        setIsLoggedIn(true)
        authInfo(isLoggedIn)
    }

    const logout = () => {
        setUser(null)
        setIsLoggedIn(false)
        authInfo(isLoggedIn)
    }

    return <AuthContext.Provider value={{user,login,logout,isLoggedIn}} >{children}</AuthContext.Provider>

}

export const useAuth = () => {
    return useContext(AuthContext)
}

export const authInfo = ({isLoggedIn}) => {
    if(isLoggedIn){
        return true
    }else{
        return false
    }
}

