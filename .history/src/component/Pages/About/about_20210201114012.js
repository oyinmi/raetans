import React from "react";
import aboutImage from './../../assets/displayImage/aboutImage/aboutImage.jpg';


const About = () => {

        return (
            <div className="about">

                <div className="about-image">
                    <img src={ aboutImage } alt='Ooops' />
                </div>

                <h4 className="about-content">
                    hello
                </h4>

            </div>
        );
}



export default About;
