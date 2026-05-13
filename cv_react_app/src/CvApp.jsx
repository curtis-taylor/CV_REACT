import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './Components/Button.jsx'
import {GeneralSection} from './Components/GeneralSection.jsx'
import './Components/Buu.jsx'

function CvApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CV APP</h1><br></br>
      
      <GeneralSection id="section1" title="General Info" field1="Name" field2="Email" field3="Phone" />
      <GeneralSection id="section2" title="Education" field1="School" field2="Major" field3="Completion Date" />
      <GeneralSection id="section3" title="Experience" field1="Job" field2="Start Date" field3="End Date" />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       <Button  id="submit" text="Submit" color="pink" fontSize={15} backgroundColor="blue" onClick={() => {alert("ttt")}}/>
    </>
  )
}

export default CvApp
