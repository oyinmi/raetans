/*jshint esversion: 6 */

import React, { Component } from "react";

class Blog extends Component {
    render() {
        return (
            <div className="content">
                <header style={{ 'paddingTop': '70px' }}>WELCOME</header>
                <h4 className="blog"> Denim Fabrics </h4>
                <div className="date">
                    <p className="text-xs-center">
                        11 May, {new Date().getFullYear()}
                    </p>
                </div>
                <div>
                    <p className= "main">
                       How our denim fabric is stored is important.Either as a fashion designer or a consumer the proper storage <br></br>
                       of  our clothes or clothing material especially our denim pieces and fabrics should be paramount to us.
                    </p>
                    <p className= "main">
                       Thank You!
                    </p>
                </div>
            </div>
        );
    }
}

export default Blog;