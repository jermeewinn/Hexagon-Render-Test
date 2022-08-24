# **Hexagon Render Test**

This React Application is to test how to create, render, and style Hexagonal polygons in the extreme off-change one needs to render hexagons into their React web application.</br> 

Credit to rexxars and rplanelles for creating the [React-Hexagon GitHub repository](https://github.com/rexxars/react-hexagon). This was really helpful in helping me figure out how to render hexagons.

## **Table of Contents**
**[Technologies Used](#technologies-used)</br>**
**[Installation](#installation)</br>**
**[Methods](#methods)</br>**
**[Notes to Self](#notes-to-self)</br>**

- [Rendering Hexagons via React Hexagon](#1-rendering-hexagons-via-react-hexagon)</br>
- [Rendering Text in React Hexagon](#2-rendering-text-wi-hexagon-via-react-hexagon)</br>
- [Canva](#3-canva)</br>

**[Future Development](#future-development)</br>**
**[Author](#author)**

## **Technologies Used**
- [React.js](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React-Router-DOM](https://v5.reactrouter.com/web/guides/quick-start)
- [JavaScript](https://www.javascript.com/)
- [React-Helmet](https://github.com/nfl/react-helmet)
- [React-Hexagon](https://github.com/rexxars/react-hexagon)

## **Installation**
If you want to recreate this repository for your own purposes, simply follow the following steps in your Text Editor:
1) Create a directory on your machine, open terminal, and clone the repository:

        $git clone git@github.com:jermeewinn/Hexagon-Render-Test.git

2) Navigate into project root directory:

        $cd Hexagon-Render-Test

3) Install all npm dependencies:

        $npm install

4) Initialize localhost:3000:

        $npm run start

## **Methods**
### **1) React Hexagon**
The node dependency we'll be working with will be [React Hexagon](https://github.com/rexxars/react-hexagon).

There isn't much on this other than the GitHub repository. The documentation is pretty limited, so there's going to be a lot of figuring out happening, but the demo site is promising as it is exactly what I need to get the job done.

### **2) Create Canva Account & Building the Object There**
It was recommended by members of the Slack group chat that I also create objects in Canva, a UI Design website. Visit their website [here](https://www.canva.com/search/templates?q=hexagon).

## **Notes to Self**
### **1) Rendering Hexagons via React Hexagon**
After some help from friends, I was able to render not just a single hexagon, but also a full hexagon ring. 

**Firstly**, in order to render a hexagon, you will need to set up your component to look like the following:

        import React from 'react';
        import Hexagon from 'react-hexagon';

        function Hexagon() {
                return(
                        <section>
                                <div id='root' className 'hex-row d-flex justify-content-center'>
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


**Next** construct not 6, but 7 hexagons to create the hexagon ring. This involves creating 3 div rows with two, three, and two hexagons, respectively. With the center hexagon set to white, the final render should look like the following screenshot:

![Hexagont Ring](src/assets/Hexagon-Ring.png)

It is best if you styled not just each row, but also each individual hexagon. In the screenshot, the min-width styling is set to 250px. If you want to change the size of the hexagons while maintaining consistent spacing between each hexagon, you will need to change the width, min-width in the **.hexagon-style**, and the margin-bottom values in the **.hex-row** className values. 

Additionally, the **.hex-row** margin-bottom value is negative so that the hexagon rows can slightly overlap each other. If set to greater than/equal to 0, then the rows would align at the hexagons' points.

### **2) Rendering Text w/i Hexagon via React Hexagon**
Rendering text within a hexagon is a little tricky. In terms of a text box, the hexagon only recognizes one line at a time, and I have yet to figure out how to create a centered text element within the Hexagon. The code for the following image can be found in the **src/components/Other/index.js** file of this repository.

![Hexagon Text](src/assets/Hexagon-Text-Example.png)

**Consider the hexagon on the right.</br>** 
Text within the Hexagon isn't rendered past the polygonal borders. I have tried using flex to center multiple lines of text, but no joy. If you have any feedback on how to do this more efficiently than the next method I'm about to show, please feel free to let me know. For reference, the code to render the right hexagon can be found here:

        <Hexagon
                className='hexagon-styled'
                style={{
                stroke: 'black',
                }}
        >
                <text className='hex-text' x='25%' y='45%'>Resume Review</text>
        </Hexagon>

Notice that we are now inputing text into the Hexagon, so the Hexagon object won't be self-closing as shown earlier in this README.

**Consider the hexagon on the left.</br>** 
Centering multiple lines of text within the hexagon is going to involve a lot of trial and error. You will need to position each individual word within the hexagon based on an X/Y-axis. Positioning is based on the beginning of the word. Different sized words are going to require different X- and Y-values, so take your time to figure out what works for you. The code to render the hexagon on the left can be found here:

        <Hexagon
                className='hexagon-styled'
                style={{
                stroke: 'black',
                }}
        >
                <text className='hex-text' x='25%' y='45%'>Resume</text>
                <text className='hex-text' x='27%' y='60%'>Review</text>
        </Hexagon>

If you were to check out the code in **src/components/Home/index.js**, you will see the variance in X- and Y-values with different sized words for each hexagon. 

**IMPORTANT NOTE:** Don't forget to style the hexagon text, otherwise the text within the hexagons would appear microscopic.

### **3) Canva**
Canva could be a good alternative to work with *if* you pay for their pro subscription. Otherwise, their free options are pretty limited, especially working with Hexagons. This would be useful if one were more concentrated on creating UX/UI elements, and if you had money to go with it.

## **Future Development**
- Figure out a way to add pictures, text, clickable text, etc. to individual Hexagons. 
- Figure out a way to enable clicking of a hexagon to correlate to a text shown in the next object.
- Figure out a way to enable href links through the hexagon. The source code from the demo doesn't seem to be working.

## **Author**
This application was created by Jeremy Huynh. If you have any inquries, my socials can be found below:
- **[LinkedIn Profile](https://www.linkedin.com/in/jeremy-huynh/)**
- **[GitHub Repository](https://github.com/jermeewinn)**