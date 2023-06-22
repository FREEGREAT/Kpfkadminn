import React from "react";
import '../App.css'
import { useState } from 'react'
import { doc, updateDoc } from '@firebase/firestore'
import { db } from '../config/firebase'

export default function ({ open, onClose })  {
  if (!open) return null;

  const [days, setDays] = useState('')
  const [id, setId] = useState('')
  const [subj1, setSubj1] = useState('')
  const [subj2, setSubj2] = useState('')
  const [subj3, setSubj3] = useState('')
  const [subj4, setSubj4] = useState('')
  const [subj5, setSubj5] = useState('')
  const [subj6, setSubj6] = useState('')

  function handleSubmit(e){
      e.preventDefault()
      if(days === '' || id === ''){
          return
      }
      const docRef = doc(db, '/kpfk/lessons/subjects', id, '/weeks/', days)
      updateDoc(docRef,{ subj1, subj2, subj3, subj4, subj5, subj6 }).then(response => {
          console.log(response)
      })
      .catch(error => console.log(error.message))
  }


  return (
    <div className="overlay">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="id"  >Виберіть групу:</label>
          <select name="Групи" required placeholder="Групи" id="id"  value={id} onChange={e => setId(e.target.value)}>
          <option value="">Виберіть групу</option>
            <option value="p41">П-41</option>
            <option value="p42">П-42</option>
            <option value="p31">П-31</option>
            <option value="p32">П-32</option>
            <option value="p21">П-21</option>
          </select>
          <br />
          <label htmlFor="id">Виберіть день: </label>
          <select name="Групи" required placeholder="День" id="days" value={days} onChange={e => setDays(e.target.value)} >
            <option value="">Виберіть день тижня</option>
            <option value="Monday">Понеділок</option>
            <option value="Tuesday">Вівторок</option>
            <option value="Wednesday">Середа</option>
            <option value="Thursday">Четвер</option>
            <option value="Friday">П'ятниця</option>
          </select>
          <br />

          {/* Number 1 */}
          <label htmlFor="subj1">1 Пара </label>
          <input id="subj1" type="text" value={subj1} onChange={ e => setSubj1(e.target.value) } />
          <button  className="update-btn" type='submit'  >Оновити поле</button>
          <br />
          {/* Number 2 */}
          <label htmlFor="subj2">2 Пара </label>
          <input id="subj2" type="text" value={subj2} onChange={ e => setSubj2(e.target.value) } />
          <button className="update-btn" type='submit'  >Оновити поле</button>
          <br />
          {/* Number 3 */}
          <label htmlFor="subj3">3 Пара </label>
          <input id="subj3" type="text" value={subj3} onChange={ e => setSubj3(e.target.value) } />
          <button className="update-btn" type='submit' >Оновити поле</button>
          <br />
          {/* Number 4 */}
          <label htmlFor="subj4">4 Пара </label>
          <input id="subj4" type="text" value={subj4} onChange={ e => setSubj4(e.target.value) } />
          <button className="update-btn" type='submit' >Оновити поле</button>
          <br />
          {/* Number 5 */}
          <label htmlFor="subj5">5 Пара </label>
          <input id="subj5" type="text" value={subj5} onChange={ e => setSubj5(e.target.value) } />
          <button className="update-btn" type='submit' >Оновити поле</button>
          <br />
          {/* Number 6 */}
          <label htmlFor="subj6">6 Пара </label>
          <input id="subj6" type="text" value={subj6} onChange={ e => setSubj6(e.target.value) } />
          <button className="update-btn" type='submit' >Оновити поле</button>
          <br />
          <button type="button" id="close-btn" onClick={onClose}>
            Закрити
          </button>
        </form>
      </div>
    </div>
  );
};

