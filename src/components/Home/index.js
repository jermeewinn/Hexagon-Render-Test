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
                        {/* <div className='hex-text'>
                            <text x='20%' y='45%'>LinkedIn Revision</text>
                        </div> */}
                        <text className='hex-text' x='20%' y='45%'>LinkedIn Revision</text>
                    </Hexagon>
                    
                </div>
                <div className='hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    />
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
                    />
                </div>
                <div className=' hex-row d-flex justify-content-center'>
                    <Hexagon
                        className='hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    />
                    <Hexagon
                        className='hexagon-styled'
                        style={{
                            stroke: 'black',
                        }}
                    />
                </div>
            </container>
        </section>
    )
}

export default Home;