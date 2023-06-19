import React from 'react'
import { useState } from 'react'
import { doc, updateDoc } from '@firebase/firestore'
import { db } from '../config/firebase'

export default function EditSubjects() {
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
    <div>
        <h4>Edit Subjects</h4>
        <form onSubmit={handleSubmit}>

            <label htmlFor="id">Name Group</label>
            <input id='id' type="text" value={id} onChange={ e => setId(e.target.value) }/>
            <br/>

            <label htmlFor="days">Name Day</label>
            <input id='days' type="text" value={days} onChange={ e => setDays(e.target.value) }/>
            <br/>
            {/* Number 1 */}
            <label htmlFor="subj1">1 - </label>
            <input id='subj1' type="text" value={subj1} onChange={ e => setSubj1(e.target.value) }/>
            <button type='submit'>Update</button>
            <br/>
            {/* Number 2 */}
            <label htmlFor="subj2">2 - </label>
            <input id='subj2' type="text" value={subj2} onChange={ e => setSubj2(e.target.value) }/>
            <button type='submit'>Update</button>
            <br/>
            {/* Number 3 */}
            <label htmlFor="subj3">3 - </label>
            <input id='subj3' type="text" value={subj3} onChange={ e => setSubj3(e.target.value) }/>
            <button type='submit'>Update</button>
            <br/>
            {/* Number 4 */}
            <label htmlFor="subj4">4 - </label>
            <input id='subj4' type="text" value={subj4} onChange={ e => setSubj4(e.target.value) }/>
            <button type='submit'>Update</button>
            <br/>
            {/* Number 5 */}
            <label htmlFor="subj5">5 - </label>
            <input id='subj5' type="text" value={subj5} onChange={ e => setSubj5(e.target.value) }/>
            <button type='submit'>Update</button>
            <br/>
            {/* Number 6 */}
            <label htmlFor="subj6">6 - </label>
            <input id='subj6' type="text" value={subj6} onChange={ e => setSubj6(e.target.value) }/>
            <button type='submit'>Update</button>
            <br/>
            
        </form>
    </div>  
  )
}