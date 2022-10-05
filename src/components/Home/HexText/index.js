import React from 'react';

function HexText({ name, description }) {
    return(
        <>
            <h3>{name}</h3>
            <div>{description}</div>
        </>
    )
};

// Ideally should ask for what data to present, and how to present it.

export default HexText;