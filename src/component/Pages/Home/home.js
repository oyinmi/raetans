/*jshint esversion: 6 */

import React, { Component } from 'react';
import {} from 'react-background-slideshow';
import { InfoConsumer } from '../Context';


class Home extends Component {
    render() {
        return(
             <InfoConsumer>
                 {value => {
                     return <h2>{value}</h2>;
                 }}
            </InfoConsumer> 
         );
    }
}

export default Home; 


