import React, { useState } from "react"
import { useAuth } from "./auth"
import { useNavigate, useLocation } from "react-router-dom"



export const Login = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation();

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
      if(user == "admin" && password == "password"){
          
        auth.login(user,password)  
        navigate(redirectPath, {replace: true})
        
      console.log((user, password))
      }
      
    }


   
  return (
    <div>
        <label>
            Username:
            <input type="text" value={user} onChange={(e) =>setUser(e.target.value)}/>
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
        </label>
        <button onClick={handleLogin}> Login</button>
    </div>  
  )
}