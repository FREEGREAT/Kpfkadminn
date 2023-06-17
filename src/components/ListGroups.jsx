import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";


export default function ListGroups() {
  
  const[groups, setGroups] = useState([])
  const[week, setWeek] = useState([])

  useEffect(() => {
    getGroups()
  }, [])

  useEffect(() => {
    getWeek()
  }, [])

  useEffect(() => {
    console.log(groups)
  }, [groups])

  useEffect(() => {
    console.log(week)
  }, [week])

  
  
  function getGroups() {
    const groupsColletionRef = collection(db, '/kpfk/lessons/subjects');
    getDocs(groupsColletionRef)
    .then(response => {
      const gr = response.docs.map(doc => ({data : doc.data(), id : doc.id, }))
      setGroups(gr)
    })
    .catch(error => console.log(error.message))
  }

  function getWeek() {
    const groupsColletionRef = collection(db, '/kpfk');
    getDocs(groupsColletionRef)
    .then(response => {
      const w = response.docs.map(doc => ({data : doc.data(), id : doc.id, }))
      setWeek(w)
    })
    .catch(error => console.log(error.message))
  }

  

  return (
    <div>
      {week.map(week => <h4>&emsp;&emsp;<b>{week.data.week[0]}</b></h4>)}
      <ul>
        {groups.map(groups => <li key ={groups.id}><b>&emsp;&emsp;&emsp;&emsp; {groups.id}</b><br></br>
        1 - {groups.data.Monday[0]}<br></br>2 - {groups.data.Monday[1]}<br></br>3 - {groups.data.Monday[2]}<br></br>
        4 - {groups.data.Monday[3]}<br></br>5 - {groups.data.Monday[4]}<br></br>6 - {groups.data.Monday[5]}<br></br>
        </li>)}
      </ul>
      {week.map(week => <h4>&emsp;&emsp;<b>{week.data.week[1]}</b></h4>)}
      <ul>
        {groups.map(groups => <li key ={groups.id}><b>&emsp;&emsp;&emsp;&emsp; {groups.id}</b><br></br>
        1 - {groups.data.Tuesday[0]}<br></br>2 - {groups.data.Tuesday[1]}<br></br>3 - {groups.data.Tuesday[2]}<br></br>
        4 - {groups.data.Tuesday[3]}<br></br>5 - {groups.data.Tuesday[4]}<br></br>6 - {groups.data.Tuesday[5]}<br></br>
        </li>)}
      </ul>
      {week.map(week => <h4>&emsp;&emsp;<b>{week.data.week[2]}</b></h4>)}
      <ul>
        {groups.map(groups => <li key ={groups.id}><b>&emsp;&emsp;&emsp;&emsp; {groups.id}</b><br></br>
        1 - {groups.data.Wednesday[0]}<br></br>2 - {groups.data.Wednesday[1]}<br></br>3 - {groups.data.Wednesday[2]}<br></br>
        4 - {groups.data.Wednesday[3]}<br></br>5 - {groups.data.Wednesday[4]}<br></br>6 - {groups.data.Wednesday[5]}<br></br>
        </li>)}
      </ul>
      {week.map(week => <h4>&emsp;&emsp;<b>{week.data.week[3]}</b></h4>)}
      <ul>
        {groups.map(groups => <li key ={groups.id}><b>&emsp;&emsp;&emsp;&emsp; {groups.id}</b><br></br>
        1 - {groups.data.Thursday[0]}<br></br>2 - {groups.data.Thursday[1]}<br></br>3 - {groups.data.Thursday[2]}<br></br>
        4 - {groups.data.Thursday[3]}<br></br>5 - {groups.data.Thursday[4]}<br></br>6 - {groups.data.Thursday[5]}<br></br>
        </li>)}
      </ul>
      {week.map(week => <h4>&emsp;&emsp;<b>{week.data.week[4]}</b></h4>)}
      <ul>
        {groups.map(groups => <li key ={groups.id}><b>&emsp;&emsp;&emsp;&emsp; {groups.id}</b><br></br>
        1 - {groups.data.Friday[0]}<br></br>2 - {groups.data.Friday[1]}<br></br>3 - {groups.data.Friday[2]}<br></br>
        4 - {groups.data.Friday[3]}<br></br>5 - {groups.data.Friday[4]}<br></br>6 - {groups.data.Friday[5]}<br></br>
        </li>)}
      </ul>
    </div>
  );
}