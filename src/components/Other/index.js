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
                        stroke: 'black'
                    }}
                />
                <Hexagon
                    className='hexagon-styled'
                    style={{
                        stroke: 'black'
                    }}
                />
            </div>
        </section>
    )
}

export default Other;