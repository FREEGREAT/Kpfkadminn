import React from 'react'
import { useState } from 'react'
import { doc, updateDoc } from '@firebase/firestore'
import { db } from '../config/firebase'

export default function EditSubjects() {
    const [days, setDays] = useState('')
    const [id, setId] = useState('')

    function handleSubmit(e){      
        e.preventDefault()
        if(days === '' || id === ''){
            return
        }
        const docRef = doc(db, '/kpfk/lessons/subjects', id)
        updateDoc(docRef,{ days }).then(response => {
            console.log(response)
        })
        .catch(error => console.log(error.message))

        function getWeek() {
            const groupsColletionRef = collection(db, '/kpfk');
            getDocs(groupsColletionRef)
            .then(response => {
              const w = response.docs.map(doc => ({data : doc.data(), id : doc.id, }))
              setWeek(w)
            })
            .catch(error => console.log(error.message))
        }
    }

  return (
    <div>
        <h4>Edit Subjects</h4>
        <form onSubmit={handleSubmit}>

            <label htmlFor="id">Name Group</label>
            <input id='id' type="text" value={id} onChange={ e => setId(e.target.value) }/>
            <br/>
            {/* Number 1 */}
            <label htmlFor="days">Subject Name</label>
            <input id='days' type="text" value={days} onChange={ e => setDays(e.target.value) }/>
            <button type='submit'>Update subject</button>
            {/* Number 2 */}
            <label htmlFor="days">Subject Name</label>
            <input id='days' type="text" value={days} onChange={ e => setDays(e.target.value) }/>
            <button type='submit'>Update subject</button>
            {/* Number 3 */}
            <label htmlFor="days">Subject Name</label>
            <input id='days' type="text" value={days} onChange={ e => setDays(e.target.value) }/>
            <button type='submit'>Update subject</button>
            {/* Number 4 */}
            <label htmlFor="days">Subject Name</label>
            <input id='days' type="text" value={days} onChange={ e => setDays(e.target.value) }/>
            <button type='submit'>Update subject</button>
            {/* Number 5 */}
            <label htmlFor="days">Subject Name</label>
            <input id='days' type="text" value={days} onChange={ e => setDays(e.target.value) }/>
            <button type='submit'>Update subject</button>
            {/* Number 6 */}
            <label htmlFor="days">Subject Name</label>
            <input id='days' type="text" value={days} onChange={ e => setDays(e.target.value) }/>
            <button type='submit'>Update subject</button>
            
        </form>
    </div>  
  )
}
