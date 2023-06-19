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


async function queryDoc(){
  const querr = query(
    collection(db, '/kpfk')
  );

  const querySnapshot = await getDocs(querr);
  const allDocs = querySnapshot.forEach((snap) => {
    console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`);
  });

}

/*async function queryDoc() {
  const collectionPath = 'groups';
  const segments = collectionPath.split('/');
  const collectionRef = collection(db, ...segments);
  const querySnapshot = await getDocs(collectionRef);
  var aa
  querySnapshot.forEach((doc) => {
    (`Document ${doc.id} contains ${JSON.stringify(doc.data())}`);
  });

}*/




function App() {
<<<<<<< HEAD
  //const group = collection(db, `/kpfk`)
  /*onSnapshot(group, onSnapshot => {
    if(onSnapshot.exists()){
      const docData = onSnapshot.data();
      console.log(`Zalupa  is ${JSON.stringify(docData)}`);
    }
  });*/

 

=======
>>>>>>> 3f2b201df6ded60a0bf01ce6a71cf4cc5dbf1513
  const [showSidebar, setShowBar] = useState(true)
  return (
      <div className='App'>
        <header>
          <GiHamburgerMenu onClick={() => setShowBar(!showSidebar)} />
        </header>
         < Navbar show={showSidebar} />
        {/* <ListGroups /> */}
        <AddSubjects />
<<<<<<< HEAD
=======
        <EditSubjects/>
>>>>>>> 3f2b201df6ded60a0bf01ce6a71cf4cc5dbf1513
      </div>
      
  )
}

export default App