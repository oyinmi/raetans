import React from "react";
import aboutImage from './../../assets/displayImage/aboutImage/aboutImage.jpg';


const About = () => {

        return (
            <div className="about">

                <div className="about-image">
                    <img src={ aboutImage } alt='Ooops' />
                </div>

                <p className="about-content">
                    Rae Tans is a multi-faceted global womenswear collection, aimed at designing
                    and creating pieces for the modest woman.
                </p>

            </div>
        );
}



export default About;
