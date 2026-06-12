import React from 'react';

export function Button2({onClick, id, text, color, fontSize, backgroundColor}) {

    const submitClick = () => {
        console.log('You clicked button!' + backgroundColor);
    }


    const submitStyle = {
        color: color,
        fontSize: fontSize,
        backgroundColor: backgroundColor
    };

    const editStyle = {
        color: "white",
        fontSize: "15px",
        backgroundColor: "green"
    };

    //console.log("0000");

    return (
        <div className='buttonContainer'>
            <button onClick={onClick} id={id} style={submitStyle}>{text}</button>
        </div>
    );
}