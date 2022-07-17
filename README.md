# Hexagon Render Test
This React Application is to test how to create, render, and style Hexagons. 

## Technologies Used
- React.js
- React Bootstrap
- JavaScript
- React Hexagon

## Installation
If you want to recreate this repository for your own purposes, simply follow the following steps in your Text Editor:
1) Create a directory on your machine, open terminal, and clone the repository:

        $git clone git@github.com:jermeewinn/Hexagon-Render-Test.git

2) Navigate into project root directory:

        $cd Hexagon-Render-Test

3) Install all npm dependencies:

        $npm install

4) Initialize localhost:3000:

        $npm run start

## Methods
### **1) React Hexagon**
The node dependency we'll be working with will be [React Hexagon](https://github.com/rexxars/react-hexagon).

There isn't much on this other than the GitHub repository. The documentation is pretty limited, so there's going to be a lot of figuring out happening, but the demo site is promising as it is exactly what I need to get the job done.

### **2) Create Canva Account & Building the Object There**
It was recommended by members of the Slack group chat that I also create objects in Canva, a UI Design website. The work that will come out of this will go into the components/Other/index.js file.

Visit their website [here](https://www.canva.com/search/templates?q=hexagon).

## Notes to Self
### **1) React Hexagon**
After some help from friends, I was able to render not just a single hexagon, but also a full hexagon ring. 

Firstly, in order to render a hexagon, you will need to set up your component to look like the following:

        import React from 'react';
        import Hexagon from 'react-hexagon';

        function Hexagon() {
                return(
                        <section>
                                <div 
                                        id='root' 
                                        className 'hex-row d-flex justify-content-center'>
                                        <Hexagon
                                                className='hexagon-styled'
                                                style={{
                                                        stroke: 'black'
                                                }}>
                                        />
                                </div>
                        </section>        
                );
        };

This involves creating 3 div rows with two, three, and two hexagons, respectively. With the center hexagon set to white, the final render should look like the following screenshot:

![Hexagont Ring](src/assets/Hexagon-Ring.png)

It is best if you styled not just each row, but also each individual hexagoon. In the screenshot, the min-width styling is set to 250px. If you want to change the size of the hexagons while maintaining consistent spacing between each hexagon, you will need to change the width, min-width in the **.hexagon-style**, and the margin-bottom values in the **.hex-row** className values. 

Additionally, the **.hex-row** margin-bottom value is negative so that the hexagon rows can slightly overlap each other. If set to greater than/equal to 0, then the rows would align at the hexagons' points.

### **2) Canva**
Canva could be a good alternative to work with *if* you pay for their pro subscription. Otherwise, their free options are pretty limited, especially working with Hexagons. 
