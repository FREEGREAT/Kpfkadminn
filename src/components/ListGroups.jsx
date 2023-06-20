import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import '../App.css'
import {Table} from '@mui/material'

export default function ListGroups() {
  const [id, setId] = useState("p41");
  const [message, setMessage] = useState("");
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    console.log(groups);
  }, [groups]);

  const handleSubmit = event => {
    console.log("handleSubmit run");
    event.preventDefault();

    if (id === "") {
      return;
    }

    const groupsCollectionRef = collection(
      db,
      "/kpfk/lessons/subjects/",
      id,
      "/weeks"
    );
    getDocs(groupsCollectionRef)
      .then(response => {
        const gr = response.docs.map(doc => ({ data: doc.data(), id: doc.id }));
        setGroups(gr);
      })
      .catch(error => console.log(error.message));
  };

  const sortedDaysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  // Sort the groups by the index of the day of the week in the sortedDaysOfWeek array
  const sortedGroups = [...groups].sort((a, b) =>
    sortedDaysOfWeek.indexOf(a.id) - sortedDaysOfWeek.indexOf(b.id)
  );

  return (
    <div className="list" >
      <form onSubmit={handleSubmit}>
        <input
          id="first_name"
          name="first_name"
          type="text"
          placeholder="First Name"
          onChange={event => setId(event.target.value)}
          value={id}
        />
        <button type="submit">Submit form</button>
        <h2>{message}</h2>
      </form>
      <table>
  <thead>
    <tr>
      <th>День</th>
      <th>1 Пара</th>
      <th>2 Пара</th>
      <th>3 Пара</th>
      <th>4 Пара</th>
      <th>5 Пара</th>
      <th>6 Пара</th>
    </tr>
  </thead>
  <tbody>
    {sortedGroups.map(group => (
      <tr key={group.id}>
        <td><b>{group.id}</b></td>
        <td>{group.data.subj1}</td>
        <td>{group.data.subj2}</td>
        <td>{group.data.subj3}</td>
        <td>{group.data.subj4}</td>
        <td>{group.data.subj5}</td>
        <td>{group.data.subj6}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}