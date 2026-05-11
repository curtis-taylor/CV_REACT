import React from 'react'

export function GeneralSection() {
    return (
        <div>
            <h3>General Information</h3>
            <div id="basic_textfields">
                <label>Name: </label>
                <input></input>
                <label>Email: </label>
                <input></input>
                <label>Phone: </label>
                <input></input>
            </div>
            
            <br></br><br></br>
            <h3>Education</h3>
            <div id="school_textfields">
                <label>School: </label>
                <input></input>
                <label>Major: </label>
                <input></input>
                <label>Completion Date: </label>
                <input></input>
            </div>
    
            <br></br><br></br>
            <h3>Experience</h3>
            <div id="school_textfields">
                <label>Job: </label>
                <input></input>
                <label>Start Date: </label>
                <input></input>
                <label>End Date: </label>
                <input></input>
            </div>
      </div>

    );
}