import React, { useState } from 'react';
import Hexagon from 'react-hexagon';

const HomeLeft = () => {
    const [services] = useState([
        {
            name: 'Resume Review',
            description: 'Have one of our consultants take a look at your resume, and work with you in transforming it into a key that will open doors for your future job hunt. We optimize for ATS so that you can get your foot in more doors.',
            src: 'Resume.jpg',
        },
        {
            name: 'LinkedIn Revision',
            description: 'The future of job hunting is online, and Linkedin is a major part of that. We will help you create and configure your LinkedIn profile so that you can start job hunting quickly and efficiently.',
        },
        {
            name: 'Career Consulting',
            description: 'If the job application asks for a cover letter, submit one. We can work with you in going over key aspects on formatting, composition, and delivery of your cover letter.',
        },
        {
            name: 'Interview Prep',
            description: "Got something on the books? That's great! We'll give you the interview prep you need so that you don't go into the interview lost. We will give you a mock interview so that you can mentally engage",
        },
        {
            name: 'Cover Letter'
        }
    ])
    return(
        <div id='hex-ring' className='hex-left'>
            <div id='root' className='hex-row d-flex justify-content-center'>
                {/* Hexagon needs to go here */}
                <Hexagon
                    className='hexagon-styled'
                    style={{
                        stroke: 'black',
                    }}
                >
                    <text className='hex-text' x='25%' y='45%'>Resume</text>
                    <text className='hex-text' x='27%' y='60%'>Review</text>
                </Hexagon>
                <Hexagon
                    className='hexagon-styled'
                    style={{
                        stroke: 'black',
                    }}
                >
                    <text className='hex-text' x='22%' y='45%'>LinkedIn</text>
                    <text className='hex-text' x='22%' y='60%'>Revision</text>
                </Hexagon>
            </div>
            <div className='hex-row d-flex justify-content-center'>
                <Hexagon
                    className='hexagon-styled'
                    style={{
                        stroke: 'black',
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
                    style={{
                        stroke: 'black',
                    }}
                >
                    <text className='hex-text' x='25%' y='45%'>Interview</text>
                    <text className='hex-text' x='35%' y='60%'>Prep</text>
                </Hexagon>
            </div>
            <div className='hex-row d-flex justify-content-center'>
                <Hexagon
                    className='hexagon-styled'
                    style={{
                        stroke: 'black',
                    }}
                >
                    <text className='hex-text' x='15%' y='45%'>Job Search</text>
                    <text className='hex-text' x='25%' y='60%'>Strategy</text>
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
    )
};

export default HomeLeft;