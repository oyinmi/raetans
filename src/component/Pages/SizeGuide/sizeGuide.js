/*jshint esversion: 6 */

import React, { Component } from 'react';
import styled from 'styled-components';
import { sizeGuideData } from './sizeGuideData';


class SizeGuide extends Component {
    render() {
        return(
            <StyledSizeGuide>

                <div>
                    {sizeGuideData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>

                                <img src={item.image} alt={item.alt} />
                            </li>
                        );
                    })}
                </div>
                
            </StyledSizeGuide>
        );
    }
}


export default SizeGuide;


const StyledSizeGuide = styled.div`
    height: 50%;
    width: 20rem;
    align-self: center;
`;