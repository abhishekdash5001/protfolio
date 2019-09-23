import React, { Component } from 'react';
import '../landingPage/landingPage.scss';
import { Animated } from "react-animated-css";



class LandingPage extends React.Component {



    render() {
        return (
            <>
            <link
      href="https://fonts.googleapis.com/css?family=Dosis:300,400,700"
      rel="stylesheet"
    />
             <div className="container-custom">
                 <div className="banner">

                
                <Animated animationIn="fadeInRight" animationOut="fadeOutLeft" isVisible={true} animationInDuration={1000}>
                   
                   
                            <h1>
                                My <span>Protfolio</span>
                            </h1>

                        
                    

                </Animated>
                <Animated  animationIn="fadeInLeft" animationOut="fadeOutRight" isVisible={true}  >
                    <p>&copy;      abhishekDash50001@gmail.com</p>
                    
                </Animated >

                <Animated  animationIn="fadeInRight" animationOut="fadeOutLeft" animationInDelay={1500}>
                    <button className="btn-right">
                          Guest
                    </button>

                </Animated>
                <Animated  animationIn="fadeInLeft" animationOut="fadeOutRight" animationInDelay={1700}>
                <button className="btn-left">
                          Abhishek
                    </button>
                </Animated>
                </div>
</div>
            </>
        )
    }
}







export default LandingPage;