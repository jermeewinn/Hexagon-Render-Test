import React from 'react';
import { Helmet } from 'react-helmet';
import Hexagon from 'react-hexagon';

function Other() {
    return(
        <section>
            <Helmet>
                <title>Hexagon Render Test | Other</title>
            </Helmet>
            <div>
                <h1>Other</h1>
            </div>
            <div id='root' className='hex-row d-flex justify-content-center'>
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
                    <text className='hex-text' x='25%' y='45%'>Resume Review</text>
                </Hexagon>
            </div>
        </section>
    )
}

export default Other;