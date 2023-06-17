import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";


export default function ListGroups() {

    const itemList = [
      { id: 1, list: "Monday" },
      { id: 2, list: "Tuesday" },
      { id: 3, list: "Wednesday" },
      { id: 4, list: "Thursday" },
      { id: 5, list: "Friday" }
    ];
  
  const[groups, setGroups] = useState([])

  useEffect(() => {
    getGroups()
  }, [])

  useEffect(() => {
    console.log(groups)
  }, [groups])


  
  function getGroups() {
    const groupsColletionRef = collection(db, '/kpfk/lessons/subjects/');
    getDocs(groupsColletionRef)
    .then(response => {
      const gr = response.docs.map(doc => ({data : doc.data(), id : doc.id, }))
      setGroups(gr)
    })
    .catch(error => console.log(error.message))
  }

  

  return (
    <div>
      <ul>
      {itemList.map(item => (
        <><li key={item.id}><br></br>&emsp;&emsp; <b>{item.list}</b></li><ul><br></br>
          {groups.map(groups => <li key={groups.id}><b>&emsp;&emsp;&emsp;&emsp; {groups.id}</b><br></br>
            1 - {groups.data[item.list][0]}<br></br>2 - {groups.data[item.list][1]}<br></br>3 - {groups.data[item.list][2]}<br></br>
            4 - {groups.data[item.list][3]}<br></br>5 - {groups.data[item.list][4]}<br></br>6 - {groups.data[item.list][5]}<br></br>
          </li>)}
        </ul></>
      ))}
    </ul>
    </div>
  );
}