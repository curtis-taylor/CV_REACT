import React from 'react';

export function Button({id, text, color, fontSize, backgroundColor}) {

    const handleClick = () => {
        console.log('You clicked me!');
    }

    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px",
        backgroundColor: backgroundColor
    };

    //console.log("0000");

    return (
        <div>
            <button onClick={handleClick} id={id} style={buttonStyle}>{text}</button> 
        </div>
    );
}

//export default Button;