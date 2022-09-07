import React from 'react';

// Upon click of hexagon, the description of the service should appear in the Home-Right component.
const HomeRight = ({ service }) => {

    const [textShow, setTextShow] = React.useState(false);
    
    return(
        <div className='hex-right' >
            {/* {services.map((service, i) => (

            ))} */}
            Lorem ipsum and such.
        </div>
    )
};

export default HomeRight;