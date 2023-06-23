import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { motion, AnimatePresence } from "framer-motion";

export default function ListGroups({ onButtonClick }) {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  const [id, setId] = useState("p41");
  const [message, setMessage] = useState("");
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    console.log(groups);
  }, [groups]);

  const handleSubmit = (event) => {
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
      .then((response) => {
        const gr = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setGroups(gr);
      })
      .catch((error) => console.log(error.message));
  };

  const sortedDaysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Sort the groups by the index of the day of the week in the sortedDaysOfWeek array
  const sortedGroups = [...groups].sort(
    (a, b) => sortedDaysOfWeek.indexOf(a.id) - sortedDaysOfWeek.indexOf(b.id)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        duration: 0.5,
        type: "spring",
        delay: 0.1,
        stiffness: 150,
        damping: 8,
      }}
      className="list"
    >
      <form onSubmit={handleSubmit}>
        <select
          name="Групи"
          id="name"
          value={id}
          onChange={(event) => setId(event.target.value)}
        >
          <option value="p41">P-41</option>
          <option value="p42">P-42</option>
          <option value="p31">P-31</option>
          <option value="p32">P-32</option>
          <option value="p21">P-21</option>
        </select>
        <button type="submit">Отримати розклад</button>
        <button type="button" onClick={onButtonClick}>
          Змінити розклад
        </button>
        <button className="logout-btn" onClick={handleLogout}>
          {" "}
          Вийти
        </button>
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
          <AnimatePresence>
            {sortedGroups.map((group) => (
              <motion.tr
                key={group.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <td>
                  <b>{group.id}</b>
                </td>
                <td>{group.data.subj1}</td>
                <td>{group.data.subj2}</td>
                <td>{group.data.subj3}</td>
                <td>{group.data.subj4}</td>
                <td>{group.data.subj5}</td>
                <td>{group.data.subj6}</td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </motion.div>
  );
}
