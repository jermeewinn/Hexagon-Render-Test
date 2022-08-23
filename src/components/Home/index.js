import React from 'react';
import { Helmet } from 'react-helmet';
import Hexagon from 'react-hexagon';

function Home() {
    
    return(
        <section>
            <container id='identification'>
                <div>
                    <Helmet>
                        <title>Hexagon Render Test | Home</title>
                    </Helmet>
                </div>
                <div>
                    <h1>Home</h1>
                </div>
            </container>
            <container id='hex-ring' className='hex-ring'>
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
                <div className=' hex-row d-flex justify-content-center'>
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
                        }}
                    >
                        <text className='hex-text' x='35%' y='45%'>View</text>
                        <text className='hex-text' x='42%' y='60%'>All</text>
                    </Hexagon>
                </div>
            </container>
        </section>
    )
}

export default Home;