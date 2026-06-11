import React from "react"
import { useState } from "react"
import { Button2 } from "./Button2"




export function Form() {

  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [school, setSchool] = useState('')
    const [major, setMajor] = useState('')
    const [dateComplete, setDateComplete] = useState('')

    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [tasks, setTasks] = useState('')

    const [isFormVisible, setFormVisible] = useState(true)
    const [isSubmitVisible, setSubmitVisible] = useState(true)
    const [isEditVisible, setEditVisible] = useState(false)
    const [isOutputVisible, setOutputVisible] = useState(false)

    const [cvText, setCVText] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      
      let info = [ name, email, phone, school, major, dateComplete, company, position, tasks]
      alert(`Hello, ${info}`);

      setCVText(info);

      setFormVisible(!isFormVisible);
      setSubmitVisible(!isSubmitVisible);
      setEditVisible(!isEditVisible);
      setOutputVisible(!isOutputVisible);

    }; 

    return (

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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            /> 
            <input
              type="tel"
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
              type="date"
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

        <Button2
          id={'submit'}
          text={'Submit'}
          color={'white'}
          fontSize={'15px'}
          backgroundColor={'blue'}

        
        /> : null
       
      
    </form>
        
    );

}

