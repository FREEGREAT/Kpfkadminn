import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return(
        <div>
            {auth.user}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}
