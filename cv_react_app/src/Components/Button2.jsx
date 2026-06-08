import React from 'react';

export function Button2({id, text, color, fontSize, backgroundColor}) {

    const submitClick = () => {
        console.log('You clicked button!');
    }


    const submitStyle = {
        color: 'blue',
        fontSize: {fontSize},
        backgroundColor: {backgroundColor}
    };

    const editStyle = {
        color: "white",
        fontSize: "15px",
        backgroundColor: "green"
    };

    //console.log("0000");

    return (
        <div className='buttonContainer'>
            <button onClick={submitClick} id={id} style={submitStyle}>{text}</button>
        </div>
    );
}