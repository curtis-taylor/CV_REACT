import React from 'react'

export function GeneralSection(props) {
    return (
        <div >
            <h3>{props.title}</h3>
            <div id={props.id}>
                <div className='field'>
                    <label>{props.field1}: </label>
                    <input></input> 
                </div>
                <br></br>
                <div className='field'>
                    <label>{props.field2}: </label>
                    <input></input>
                </div>
                <br></br>
                <div className='field'>
                    <label>{props.field3}: </label>
                    <input></input>
                </div>
            </div>
            
            <br></br><br></br>
            
      </div>

    );
}