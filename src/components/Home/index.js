import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
// import Hexagon from 'react-hexagon';
import HomeLeft from './Home-Left';
import HomeRight from './Home-Right';

function Home() {
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
    ]);
    
    return(
        <section>
            <container id='identification' >
                <div>
                    <Helmet>
                        <title>Hexagon Render Test | Home</title>
                    </Helmet>
                </div>
                <div className='banner'>
                    <h1>Home</h1>
                </div>
            </container>
            <HomeLeft />
            <HomeRight />
        </section>
    )
}

export default Home;