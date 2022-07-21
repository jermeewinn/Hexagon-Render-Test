import React from 'react';
import { Helmet } from 'react-helmet';
import Hexagon from 'react-hexagon';

function Home() {
    
    return(
        <section>
            <div>
                <Helmet>
                    <title>Hexagon Render Test | Home</title>
                </Helmet>
            </div>
            <div>
                <h1>Home</h1>
            </div>
            <div id='root' className='hex-row d-flex justify-content-center'>
                {/* Hexagon needs to go here */}
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black', 
                    }}
                >
                    <text x='50%' y='50%'>Resume Revision</text>
                </Hexagon>
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                    }}
                />
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
        </section>
    )
}

export default Home;