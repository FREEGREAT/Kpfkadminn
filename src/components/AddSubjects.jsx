import React, { useState } from 'react'
import { collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { updateDoc } from 'firebase/firestore'
import { subjectCollectionRef } from '../lib/firestore.collection'

export default function AddSubjects() {

    const [name, setName] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if (name === ''){
            return
        }
        // db.collection("kpfk").doc('lessons').collection('monday').doc('p41').update({
        //     day : "tuesday"
            
        // });
        const subjectCollectionRef = collection(db, '/kpfk/lessons/monday/')
        // const subjectCollectionRef = collection(db, 'kpfk').doc('lessons').collection('monday').doc('p41').set({name : this.name})
        updateDoc(subjectCollectionRef, {name}).then(response => {
            console.log(response.id)
        }).catch(error =>{
            console.log(error.message)
        })
    }

  return (
    <div>
        <h4>Add Subjects</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Subject Name</label>
            <input id='name' type="text" value={name} onChange={ e => setName(e.target.value) }/>
            <button type='submit'>Add subject</button>
        </form>
    </div>  
  )
}