import React from 'react';

function Button({id, text, color, fontSize, textcolor}) {

    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px",
        textcolor: textcolor
    };

    console.log("0000");

    return (
        <div>
            <button id={id} style={buttonStyle}>{text}</button> 
        </div>
    );
}

export default Button;