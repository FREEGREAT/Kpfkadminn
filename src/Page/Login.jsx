import React, { useState } from "react"
import { useAuth } from "./auth"
import "../App.css"
import { useNavigate, useLocation } from "react-router-dom";
import {motion} from "framer-motion"



export const Login = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation();

    const redirectPath = location.state?.path || '/list'

    const handleLogin = () => {
      if(user == "admin" && password == "password"){
          
        auth.login(user,password)  
        navigate(redirectPath, {replace: true})
        
      console.log((user, password))
      }
      
    }


  return (
    <div className="login-overlay">
        
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.5, type:"spring", delay: 0.1, stiffness: 150, damping: 8}}
    className="login-container">
            <h1>Вхід</h1>
             <input type="text" placeholder="Логін" value={user} onChange={(e) =>setUser(e.target.value)}/>
            <input type="password" placeholder="Пароль"  value={password} onChange={(e) =>setPassword(e.target.value)}/>
        <button onClick={handleLogin}> Увійти</button>
    </motion.div> 
    </div> 
  )
}