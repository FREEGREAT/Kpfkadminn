import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default function ListGroups() {
  const [id, setId] = useState("");
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
    <div>
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

      <ul>
        {sortedGroups.map(group => (
          <li key={group.id}>
            <b>&emsp;&emsp;&emsp;&emsp; {group.id}</b>
            <br />
            1 - {group.data.subj1}<br />
            2 - {group.data.subj2}<br />
            3 - {group.data.subj3}<br />
            4 - {group.data.subj4}<br />
            5 - {group.data.subj5}<br />
            6 - {group.data.subj6}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}