import { useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Navbar from './components/Navbar'
import './App.css'
import ListGroups from './components/ListGroups';
import EditSubjects from './components/EditSubjects';




function App() {
  const [showSidebar, setShowBar] = useState(true)
  return (
      <div className='App'>
        <header>
          <GiHamburgerMenu onClick={() => setShowBar(!showSidebar)} />
        </header>
         < Navbar show={showSidebar} />
        <ListGroups />
        <EditSubjects/>
      </div>
      
  )
}

export default App