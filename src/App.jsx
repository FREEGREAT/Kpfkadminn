import { useState} from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import Navbar from './components/Navbar'
import './App.css'
import ListGroups from './components/ListGroups';
import Modal from './components/Modal'
import {  Routes, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';




function App() {
  const [openModal, setOpenModal]=useState(false);
  const [showSidebar, setShowBar] = useState(true);
  const handleButtonClick = () => {
    setOpenModal(true);
  };
  return (
      <div className='App'>
        
        <CSSTransition in={openModal} timeout={300}
        classNames="modal" unmountOnExit>
            <Modal open={openModal} onClose={()=> setOpenModal(false)}  />
        </CSSTransition>
        
        <header>
          <GiHamburgerMenu onClick={() => setShowBar(!showSidebar)} />
        </header>
         < Navbar show={showSidebar} />
            <Routes>
              <Route path="/" element={<ListGroups onButtonClick={handleButtonClick}  />} />
            </Routes> 
        
      </div>
      
  )
}

export default App