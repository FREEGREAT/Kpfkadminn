import { useState} from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import Navbar from './components/Navbar'
import './App.css'
import ListGroups from './components/ListGroups';
import EditSubjects from './components/EditSubjects';

import {  Routes, Route, Router, useLocation } from 'react-router-dom';



function App() {
  const location = useLocation();
  const [showSidebar, setShowBar] = useState(true)
  return (
      <div className='App'>
        <header>
          <GiHamburgerMenu onClick={() => setShowBar(!showSidebar)} />
        </header>
         < Navbar show={showSidebar} />
            <Routes>
              <Route path="/" element={<ListGroups/>} />
              <Route path="/Edit" element={<EditSubjects/>} />
            </Routes>

        
      </div>
      
  )
}

export default App