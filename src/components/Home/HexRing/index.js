import React, { useState } from 'react';
import Hexagon from 'react-hexagon';

function HexRing() {
    const [text, setText] = useState('Here are some of the services we provide to our clients.');
    // const [services] = useState([
    //     {
    //         name: 'Resume Review',
    //         description: 'Have one of our consultants take a look at your resume, and work with you in transforming it into a key that will open doors for your future job hunt. We optimize for ATS so that you can get your foot in more doors.',
    //         src: 'Resume.jpg',
    //     },
    //     {
    //         name: 'LinkedIn Revision',
    //         description: 'The future of job hunting is online, and Linkedin is a major part of that. We will help you create and configure your LinkedIn profile so that you can start job hunting quickly and efficiently.',
    //     },
    //     {
    //         name: 'Career Consulting',
    //         description: 'If the job application asks for a cover letter, submit one. We can work with you in going over key aspects on formatting, composition, and delivery of your cover letter.',
    //     },
    //     {
    //         name: 'Interview Prep',
    //         description: "Got something on the books? That's great! We'll give you the interview prep you need so that you don't go into the interview lost. We will give you a mock interview so that you can mentally engage",
    //     },
    //     {
    //         name: 'Cover Letter',
    //         description: 'If the job application asks for a cover letter, submit one. We can work with you in going over key aspects on formatting, composition, and delivery of your cover letter.',
    //     }
    // ]);

    

    // For the hex-services array, you may need to create a singular <Hexagon> template to 
    return(
        <div className='d-flex'>
            <div id='hex-ring' className='hexagons col-md-6'>
                <div id='root' className='hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='hexagon-styled'
                        onClick={() => setText('Have one of our consultants take a look at your resume, and work with you in transforming it into a key that will open doors for your future job hunt. We optimize for ATS so that you can get your foot in more doors.')}
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
                        onClick={() => setText('The future of job hunting is online, and Linkedin is a major part of that. We will help you create and configure your LinkedIn profile so that you can start job hunting quickly and efficiently.')}
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
                        onClick={() => setText("Don't know what you want to do? We'll schedule a consultation with you to get an idea of where you're at and where you want to go.")}
                        style={{
                            stroke: 'black',
                            fill: 'white'
                        }}
                    >
                        <text className='hex-text' x='27%' y='45%'>Career</text>
                        <text className='hex-text' x='17%' y='60%'>Consulting</text>
                    </Hexagon>
                    {/* This will be the white Hexagon */}
                    <Hexagon
                        className='hexagon-styled'
                        style={{
                            stroke: 'white',
                        }}
                    />
                    <Hexagon
                        className='hexagon-styled'
                        onClick={() => setText("Got something on the books? That's great! We'll give you the interview prep you need so that you don't go into the interview lost. We will give you a mock interview so that you can mentally engage")}
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
                        onClick={() => setText('If the job application asks for a cover letter, submit one. We can work with you in going over key aspects on formatting, composition, and delivery of your cover letter.')}
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
                {text}
            </div>
        </div>
    );
};
//NOTE TO SELF: When playing around with anything to do with Hexagon interactivity (i.e. ), be sure to set
//the fill value to the color of the background. This way, the Hexagon as a whole will pick up your actions,
//whether it be onClick, href/target, etc.

//Only thing to figure out now is to style the max-width values for hex-right w/o moving the text to default position.

export default HexRing;