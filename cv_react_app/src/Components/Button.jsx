import React from 'react';

export function Button({id, text, color, fontSize, backgroundColor}) {

    const submitClick = () => {
        console.log('You clicked Submit button!');
    }

    const editClick = () => {
        console.log('You clicked Edit button!');
    }

    const submitStyle = {
        color: "white",
        fontSize: "15px",
        backgroundColor: "blue"
    };

    const editStyle = {
        color: "white",
        fontSize: "15px",
        backgroundColor: "green"
    };

    //console.log("0000");

    return (
        <div className='buttonContainer'>
            <button onClick={submitClick} id="submit" style={submitStyle}>Submit</button>
            <button onClick={editClick} id="edit" style={editStyle}>Edit</button>  
        </div>
    );
}

//export default Button;