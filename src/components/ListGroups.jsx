import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";


export default function ListGroups() {
  
  const[groups, setGroups] = useState([])

  useEffect(() => {
    getGroups()
  }, [])

  useEffect(() => {
    console.log(groups)
  }, [groups])

  
  
  function getGroups() {
    const groupsColletionRef = collection(db, '/kpfk/lessons/monday/');
    getDocs(groupsColletionRef)
    .then(response => {
      const gr = response.docs.map(doc => ({data : doc.data(), id : doc.id, }))
      setGroups(gr)
    })
    .catch(error => console.log(error.message))
  }

  return (
    <div>
      <h4>&emsp;<b>Monday</b></h4>
      <ul>
        {groups.map(groups => <li key ={groups.id}><b>&emsp;&emsp;&emsp;&emsp; {groups.id}</b><br></br>
        1 - {groups.data.subjects[0]}<br></br>2 - {groups.data.subjects[1]}<br></br>3 - {groups.data.subjects[2]}<br></br>
        4 - {groups.data.subjects[3]}<br></br>5 - {groups.data.subjects[4]}<br></br>6 - {groups.data.subjects[5]}<br></br>
        </li>)}
      </ul>
    </div>
  );
}