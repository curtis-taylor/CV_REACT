import React from "react"
import { useState } from "react"
import { Button2 } from "./Button2"
import { use } from "react"




export function Form() {

  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [school, setSchool] = useState('')
    const [major, setMajor] = useState('')
    const [dateComplete, setDateComplete] = useState('')

    const [company, setCompany] = useState('')
    const [location, setCompanyLocation] = useState('')
    const [position, setPosition] = useState('')
    const [tasks, setTasks] = useState('')
    const [jobStart, setJobStart] = useState('');

    const [isFormVisible, setFormVisible] = useState(true)

    const [cvText, setCVText] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      setTasks(tasks.split('*'))

      console.log(tasks)
      
      let info = [ name, email, phone, school, major, dateComplete, company, position, tasks, jobStart, location]
      //alert(`Hello, ${info}`);

      setCVText(info);

      setFormVisible(!isFormVisible);


    }; 

    const handleEdit = (e) => {
      e.preventDefault();

      setFormVisible(true);
      //setSubmitVisible(true);
      //setEditVisible(false);

      //setOutputVisible(false);

    };

   if (isFormVisible) { 
    return (

     //<form onSubmit={handleSubmit}>
     <>
      <div id="formContainer">
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
            <br></br>
            <label>Course Complete Date</label>
            <input
              type="date"
              value={dateComplete}
              onChange={(e) => setDateComplete(e.target.value)}
              placeholder="Enter course completion date"
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
              value={location}
              onChange={(e) => setCompanyLocation(e.target.value)}
              placeholder="Enter Company Location City etc"
            /> 
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Enter Company position title"
            /> 
            <br></br>
            <label>Job Start Date</label>
             <input
              type="date"
              value={jobStart}
              onChange={(e) => setJobStart(e.target.value)}
              placeholder="Enter Job Start Date"
            /> 

            <textarea
              type="text"
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
              placeholder="Enter position Responsibilities. Use '*' star before every bullet point."
            /> 

        </div>
        
      </div>

      <br></br>

        <Button2
        onClick = {handleSubmit}
          id={'submit'}
          text={'Submit'}
          color={'white'}
          fontSize={'15px'}
          backgroundColor={'blue'}

        
        />
       
      
    </>
        
    ); }

    return(

      <div id="output">
        <u><h1> {cvText[0]} </h1></u>
      <div id="contactContainer">
        
          <span id="email"><h3> {cvText[1]} </h3></span>
          <span id="phone"> <h3>#{cvText[2]} </h3> </span>
       
      </div>
      <br></br><br></br>

      <div>
         <div><h2><u>EDUCATION</u></h2></div>
         <div>
            <span> <b>School Name: </b> <i> {cvText[3]} </i> </span>
        </div>
        <div>
            <span> <b>Major:</b> {cvText[4]} </span>
        </div>
        <div>
            <span> <b>Date Completed:</b> {cvText[5]} </span>
        </div>

      </div>

      <br></br><br></br>

      <div>
         <div><h2><u>EXPERIENCE</u></h2></div>
         <div>
            <span> <b>{cvText[7]} </b></span>
        </div>
         <div>
            <span> <i>{cvText[6]}</i>, {cvText[10]} ({cvText[9]}) </span>
        </div>
        
        <div>
            <span> <b>Position Tasks and Responsibilities:</b> {cvText[8]} </span>
        </div>

      </div>

      <Button2
        onClick = {handleEdit}
          id={'editButton'}
          text={'Edit'}
          color={'white'}
          fontSize={'15px'}
          backgroundColor={'green'}

        
        />
    </div>

    ); 

}

