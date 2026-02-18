import React from 'react';

function Button({id, text, color, fontSize, textcolor}) {

    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px",
        textcolor: textcolor
    };

    return (
        <>
            <button id={id} style={buttonStyle}>{text}</button> 
        </>
    );
}

export default Button;