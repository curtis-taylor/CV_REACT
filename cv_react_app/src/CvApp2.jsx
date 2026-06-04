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

    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [tasks, setTasks] = useState('')


    const [count, setCount] = useState(0)
    const [cvText, setCVText] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    
    let info = [ "CV INFO", name, email, phone, school, major, dateComplete, company, position, tasks]
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

        <div className='section'>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter Company Name"
            /> 
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Enter Company position title"
            /> 
            <input
              type="text"
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
              placeholder="Enter position Responsibilities"
            /> 
        </div>
        
      </div>
      <br></br>
      <button type="submit">Submit</button>
      <button type="submit">Edit</button>
    </form>
      
      <div>
        <div>
          <h1> {cvText[0]} </h1>
        </div>
        
        <div>
            <p> Name: {cvText[1]} </p>
        </div>
        <div>
            <p> EMAIL: {cvText[2]} </p>
        </div>
        <div>
            <p> PHONE: {cvText[3]} </p>
        </div>
      </div>
      <br></br>

      <div>
         <div>
            <p> School Name: {cvText[4]} </p>
        </div>
        <div>
            <p> Major: {cvText[5]} </p>
        </div>
        <div>
            <p> Date Completed: {cvText[6]} </p>
        </div>

      </div>

      <br></br>

      <div>
         <div>
            <p> <b>Company Name:</b> {cvText[7]} </p>
        </div>
        <div>
            <p> <b>Position Title:</b> {cvText[8]} </p>
        </div>
        <div>
            <p> Position Tasks and Responsibilities: {cvText[9]} </p>
        </div>

      </div>
    </>




    )
}

export default CvApp2