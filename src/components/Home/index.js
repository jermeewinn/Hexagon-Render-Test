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
            <div id='root' className='hex-row d-flex justify-content-center'>
                {/* Hexagon needs to go here */}
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                        width: '25px' }}
                    // flatTop="false"  
                />
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                        width: '25px' }}
                    // flatTop="false" 
                />
            </div>
            <div className='hex-row d-flex justify-content-center'>
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                        width: '25px' }}
                    // flatTop="false"
                    
                />
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'white',
                        width: '25px' }}
                    // flatTop="false"
                    
                />
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                        width: '25px' }}
                    // flatTop="false"
                    
                />
            </div>
            <div className=' hex-row d-flex justify-content-center'>
            <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                        width: '25px' }}
                    // flatTop="false"
                    
                />
                <Hexagon
                    className='hexagon-styled'
                    style={{ 
                        stroke: 'black',
                        width: '25px' }}
                    // flatTop="false"
                    
                />
            </div>
        </section>
    )
}

export default Home;