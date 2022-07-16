import React from 'react';
import { Helmet } from 'react-helmet';
import Hexagon from 'react-hexagon';

function Home() {
    React.render(
        <Hexagon
            style={{ stroke: 'black' }}
        />,
        document.getElementById('root')
    );

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
            <div id='root' className='content'>
                {/* Hexagon needs to go here */}
                <svg></svg>
            </div>
        </section>
    )
}

export default Home;