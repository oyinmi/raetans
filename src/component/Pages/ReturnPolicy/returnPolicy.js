/*jshint esversion: 6 */

import React, { Component } from "react";

class ReturnPolicy extends Component {
    render() {
        return (
            <div className="content">
                <header style={{ 'paddingTop': '70px' }}> Our Return Policy </header>
                <h4 className="pol"> Please Note</h4>
                <div className="container">
                   <p className="main">
                       Return of packages <emphasis>must</emphasis> be made <emphasis>within a day of recieving the package</emphasis> for Lagos receipients, <emphasis>3 days</emphasis>
                       for customers outside Lagos and <emphasis>5 days</emphasis> for customers residing outside Nigeria.
                   </p>
                   <p className="main">
                        Thank You Queens and Kings for your consistent patronage! God bless you. 
                   </p>
                </div>
            </div>
        );
    }
}

export default ReturnPolicy;