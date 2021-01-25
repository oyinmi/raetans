/*jshint esversion: 6 */

import React, { Component } from "react";
import ReadyToWear from "../ReadyToWear/readyToWear";

class Shop extends Component {
    render() {
        return (
            <div className="content" style={{ paddingTop: "8rem" }} >
                <ReadyToWear/>
            </div>
        );
    }
}

export default Shop;