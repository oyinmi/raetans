/*jshint esversion: 6 */

import React, { Component } from "react";
// import Image from '../assets/about.jpg';
import { Container } from 'react';
import { Row } from 'react';
import { Col } from 'react';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    handleToggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xl="5" md="4" className="mb-3 text-md-right text-center">
                        <img src="../assets/about.jpg" className="img-fluid z-depth-1 rounded-circle left" alt="" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;


// // import React, { Component } from "react";
// // import { Link } from 'react-router-dom';

// class About extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false
//         };
//     }
//     handleToggle() {
//         this.setState({ isOpen: !this.state.isOpen });
//     }

//     render() {
//         return (
//             <Container>
//                 <Row>
//                     <Col xs={6} md={4}>
//                         <Image src="About.jpg/171x180" roundedCircle  alt=''/>
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }

// export default About;