/*jshint esversion: 6 */

import React, { useState, useEffect } from 'react';
import desktopImage from './../../assets/displayImage/desktopImage/homeImage.jpg';
import mobileImage from './../../assets/displayImage/mobileImage/homeImage.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
    const imageUrl = useWindowWidth >= 650 ? desktopImage : mobileImage;
    
        return(
           <div className='landing' style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className='landing-content'>

                    <p> SORT YOUR APPEARANCE WITH RAETANS </p>

                    <Link to='/shop'>
                        <button className='button' style={{ borderRadius: '10%' }} type="submit">
                            SEE MORE
                        </button>
                    </Link>
                    
                </div>
            </div>
         );
}

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return windowWidth;
};


export default Home; 


