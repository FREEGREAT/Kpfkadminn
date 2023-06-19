import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Navbar from './components/Navbar'
import db from './config/firebase'
import './App.css'
import { 
  collection, 
  onSnapshot,  
  getDocs, 
  doc,
  query  } from '@firebase/firestore';
import ListGroups from './components/ListGroups';
import EditSubjects from './components/EditSubjects';


async function queryDoc(){
  const querr = query(
    collection(db, '/kpfk')
  );

  const querySnapshot = await getDocs(querr);
  const allDocs = querySnapshot.forEach((snap) => {
    console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`);
  });

}





function App() {

  const [showSidebar, setShowBar] = useState(true)
  return (
      <div className='App'>
        <header>
          <GiHamburgerMenu onClick={() => setShowBar(!showSidebar)} />
        </header>
         < Navbar show={showSidebar} />
        <ListGroups />
        <EditSubjects />
      </div>
      
  )
}

export default App