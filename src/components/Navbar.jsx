
import { FaListAlt, FaHome } from 'react-icons/fa';
import {RiLogoutBoxFill} from 'react-icons/ri'
import {  Routes, Route } from 'react-router-dom';
import ListGroups from './ListGroups';
import EditSubjects from './EditSubjects';



const Navbar = ({show}) => {
return(
    <div className={show ? 'sidebar active' : 'sidebar'}>
        <ul>
            <li><a href="/"> <FaHome/> Домашня сторінка</a></li>
            <li><a href="/Edit"> <FaListAlt/> Список груп </a></li>
            <li><a href="/"> <RiLogoutBoxFill/> Вихід</a></li>
        </ul>
    </div>
 
)

}

export default Navbar