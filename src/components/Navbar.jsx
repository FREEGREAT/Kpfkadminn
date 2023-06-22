
import { FaListAlt, FaHome } from 'react-icons/fa';
import {RiLogoutBoxFill} from 'react-icons/ri'
import {  Routes, Route } from 'react-router-dom';
import ListGroups from './ListGroups';
import EditSubjects from './EditSubjects';



const Navbar = ({show}) => {
    const handleClick = () =>{
        localStorage.clear();
        window.location.reload()
    }
return(
    <div className={show ? 'sidebar active' : 'sidebar'}>
        <ul>
            <li><a href="/home"> <FaHome/> Домашня сторінка</a></li>
            <li><a href="/Edit"> <FaListAlt/> Список груп </a></li>
            <li><button onClick={handleClick}> <RiLogoutBoxFill/> Вихід</button></li>
        </ul>
    </div>
 
)

}

export default Navbar