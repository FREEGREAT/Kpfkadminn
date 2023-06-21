import { useState} from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import Navbar from './components/Navbar'
import './App.css'
import ListGroups from './components/ListGroups';
import EditSubjects from './components/EditSubjects';
import Modal from './components/Modal'
import {  Routes, Route } from 'react-router-dom';
import  Login  from './components/Login';



function App() {
  const [openModal, setOpenModal]=useState(false)
  const [showSidebar, setShowBar] = useState(true)
  return (
      <div className='App'>
        <Modal open={openModal} onClose={()=> setOpenModal(false)}  />
        <header>
          <GiHamburgerMenu onClick={() => setShowBar(!showSidebar)} />
        </header>
        
        <button type="button" onClick={()=> setOpenModal(true)}>Змінити розклад</button>
         < Navbar show={showSidebar} />
            <Routes>
              <Route path="/" element={ <Login/>} />
              <Route path="/home" element={<ListGroups/>} />
              <Route path="/Edit" element={<EditSubjects/>} />
            </Routes> 
        
      </div>
      
  )
}

export default App