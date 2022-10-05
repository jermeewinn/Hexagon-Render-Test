import React from 'react';

// Define what data you want to present, and how to present it.
function HexText({ name, description }) {
    return(
        <>
            <h3>{name}</h3>
            <div>{description}</div>
        </>
    )
};

export default HexText;