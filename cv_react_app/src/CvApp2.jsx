import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './Components/Button.jsx'
import {GeneralSection} from './Components/GeneralSection.jsx'
import './Components/Buu.jsx'

function CvApp2() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [school, setSchool] = useState('')
    const [major, setMajor] = useState('')
    const [dateComplete, setDateComplete] = useState('')


    const [count, setCount] = useState(0)
    const [cvText, setCVText] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    
    let info = [ name, email, phone, school, major, dateComplete]
    alert(`Hello, ${info}`);

    setCVText(info);

  };

    return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <div className='section'>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            /> 
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your Phone Number"
            /> 
        </div>
        <div className='section'>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="Enter your School Name"
            /> 
            <input
              type="text"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              placeholder="Enter your School Major"
            /> 
            <input
              type="text"
              value={dateComplete}
              onChange={(e) => setDateComplete(e.target.value)}
              placeholder="Enter completion date"
            /> 
        </div>
        
      </div>
      <br></br>
      <button type="submit">Submit</button>
      <button type="submit">Edit</button>
    </form>

      <h2>Submitted text:</h2>
    
      <p>{cvText}</p>
    </>




    )
}

export default CvApp2