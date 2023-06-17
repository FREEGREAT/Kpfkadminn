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
import AddSubjects from './components/AddSubjects';
import EditSubjects from './components/EditSubjects';


<<<<<<< HEAD
=======
async function queryDoc(){
  const querr = query(
    collection(db, '/kpfk')
  );

  const querySnapshot = await getDocs(querr);
  const allDocs = querySnapshot.forEach((snap) => {
    console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`);
  });

}
>>>>>>> ed99141f9265836d736ac483c3813439650128fb

/*async function queryDoc() {
  const collectionPath = 'groups';
  const segments = collectionPath.split('/');
  const collectionRef = collection(db, ...segments);
  const querySnapshot = await getDocs(collectionRef);
  var aa
  querySnapshot.forEach((doc) => {
    (Document ${doc.id} contains ${JSON.stringify(doc.data())});
  });

}*/



function App() {
<<<<<<< HEAD
  const group = collection(db, Groups)
=======
  //const group = collection(db, `/kpfk`)
>>>>>>> ed99141f9265836d736ac483c3813439650128fb
  /*onSnapshot(group, onSnapshot => {
    if(onSnapshot.exists()){
      const docData = onSnapshot.data();
      console.log(Zalupa  is ${JSON.stringify(docData)});
    }
  });*/

 

  const [showSidebar, setShowBar] = useState(true)
  return (
      <div className='App'>
        <header>
          <GiHamburgerMenu onClick={() => setShowBar(!showSidebar)} />
        </header>
         < Navbar show={showSidebar} />
        <ListGroups />
        <AddSubjects />
        <EditSubjects />
      </div>
      
  )
}

export default App