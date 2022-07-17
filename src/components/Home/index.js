import React from 'react';
import { Helmet } from 'react-helmet';
import Hexagon from 'react-hexagon';

// React.render(
//     ,
//     document.getElementById('root')
// );


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
            <div id='root' className='content'>
                {/* Hexagon needs to go here */}
                <Hexagon
                    style={{ stroke: 'black' }}
                />
                <Hexagon
                    style={{ stroke: 'black' }}
                    flatTop="true"
                />
            </div>
        </section>
    )
}

export default Home;