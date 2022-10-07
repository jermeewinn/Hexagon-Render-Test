import React, { useState } from 'react';
import Hexagon from 'react-hexagon';
import HexText from '../Hex-Text';


function HexRing() {
    
    // First set the name and description that's to change via the useState hook. Also set up the default
    const [currentName, setCurrentName] = useState('Our Services');
    const [currentDescription, setCurrentDescription] = useState('Here are some of the services we provide to our clients.');

    const services = [
        {
            id: 0, 
            name: 'Resume Review', 
            description: 'Have one of our consultants take a look at your resume, and work with you in transforming it into a key that will open doors for your future job hunt. We optimize for ATS so that you can get your foot in more doors.',
        },
        {
            id: 1,
            name: 'LinkedIn Revision',
            description: 'The future of job hunting is online, and Linkedin is a major part of that. We will help you create and configure your LinkedIn profile so that you can start job hunting quickly and efficiently.',
        },
        {
            id: 2,
            name: 'Career Consulting',
            description: 'If the job application asks for a cover letter, submit one. We can work with you in going over key aspects on formatting, composition, and delivery of your cover letter.',
        },
        {
            id: 3,
            name: 'Interview Prep',
            description: "Got something on the books? That's great! We'll give you the interview prep you need so that you don't go into the interview lost. We will give you a mock interview so that you can mentally engage",
        },
        {   
            id: 4,
            name: 'Cover Letter',
            description: 'If the job application asks for a cover letter, submit one. We can work with you in going over key aspects on formatting, composition, and delivery of your cover letter.',
        }
    ];

    // Create a function that describes how to change the text.
    // When you click the Hexagon, you want to change the text in the textbox to the object w/ corresponding ID.
    function changeText(id) {
        // This function will need an input parameter that pulls the ID.
        setCurrentName(services[id].name);
        setCurrentDescription(services[id].description);
    };

    // NOTE TO SELF: talk to yourself in plain english what you're trying to do. If you're using a verb, you're likely going to need to 
    // create a function. A noun is a const or a function or a variable. Start what you need to do and broadstrokes back to specifics.
    return(
        <div className='d-flex'>
            <div id='hex-ring' className='hexagons col-md-6'>
                <div id='root' className='hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='hexagon-styled'
                        onClick={() => changeText(0)}
                        style={{
                            stroke: 'black',
                            fill: 'white'
                        }}
                    >
                        <text className='hex-text' x='25%' y='45%'>Resume</text>
                        <text className='hex-text' x='27%' y='60%'>Review</text>
                    </Hexagon>
                    <Hexagon
                        className='hexagon-styled'
                        onClick={() => changeText(1)}
                        style={{
                            stroke: 'black',
                            fill: 'white'
                        }}
                    >
                        <text className='hex-text' x='22%' y='45%'>LinkedIn</text>
                        <text className='hex-text' x='22%' y='60%'>Revision</text>
                    </Hexagon>
                </div>
                <div className='hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='hexagon-styled'
                        onClick={() => changeText(2)}
                        style={{
                            stroke: 'black',
                            fill: 'white'
                        }}
                    >
                        <text className='hex-text' x='27%' y='45%'>Career</text>
                        <text className='hex-text' x='17%' y='60%'>Consulting</text>
                    </Hexagon>
                    <Hexagon
                        className='hexagon-styled'
                        style={{
                            stroke: 'white',
                        }}
                    />
                    <Hexagon
                        className='hexagon-styled'
                        onClick={() => changeText(3)}
                        style={{
                            stroke: 'black',
                            fill: 'white'
                        }}
                    >
                        <text className='hex-text' x='25%' y='45%'>Interview</text>
                        <text className='hex-text' x='35%' y='60%'>Prep</text>
                    </Hexagon>
                </div>
                <div className='hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='hexagon-styled'
                        onClick={() => changeText(4)}
                        style={{
                            stroke: 'black',
                            fill: 'white'
                        }}
                    >
                        <text className='hex-text' x='13%' y='45%'>Cover Letter</text>
                        <text className='hex-text' x='10%' y='60%'>Composition</text>
                    </Hexagon>
                    <Hexagon
                        className='hexagon-styled'
                        style={{
                            stroke: 'black',
                            fill: 'white'
                        }}
                        href='/other'
                        target='_self'
                    >
                        <text className='hex-text' x='35%' y='45%'>View</text>
                        <text className='hex-text' x='42%' y='60%'>All</text>
                    </Hexagon>
                </div>
            </div>
            <div className='text col-md-6'>
                <HexText name={currentName} description={currentDescription} />
            </div>
        </div>
    );
};
//NOTE TO SELF: When playing around with anything to do with Hexagon interactivity (i.e. ), be sure to set
//the fill value to the color of the background. This way, the Hexagon as a whole will pick up your actions,
//whether it be onClick, href/target, etc.

//Only thing to figure out now is to style the max-width values for hex-right w/o moving the text to default position.

export default HexRing;