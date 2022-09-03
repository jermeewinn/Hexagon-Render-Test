import React from 'react';
import { Helmet } from 'react-helmet';
import Hexagon from 'react-hexagon';
import HomeLeft from './Home-Left';


function Home() {
    
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
            <HomeLeft/>
        </section>
    )
}

export default Home;