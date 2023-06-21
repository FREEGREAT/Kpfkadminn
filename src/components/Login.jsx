import React, {useRef} from 'react';
import ListGroups from './ListGroups';
import Navbar from './Navbar';

function Login(){

    const email = useRef()
    const password = useRef()

    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem('passwordData')

    const handleSubmit = () =>{
        if(email.current.value == "admin" && password.current.value == "password"){
            localStorage.setItem("emailData", "admin"),
            localStorage.setItem("passwordData", "password")
        }
    }

    return(
        <div>
            {
                getEmail && getPassword?
                <ListGroups/> :
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={email} />
                </div>
                <div>
                    <input type="password" ref={password}/>
                </div>
                <button>Login</button>
            </form>
            }
        </div>
    )
}

export default Login;