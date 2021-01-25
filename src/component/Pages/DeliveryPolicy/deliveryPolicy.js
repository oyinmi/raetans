/*jshint esversion: 6 */

import React, { Component } from "react";

class DeliveryPolicy extends Component {
    render() {
        return (
            <div className="content">
                <header style={{ 'paddingTop': '70px' }}> Our Delivery Policy </header>
                <h4 className="pol"> Please Note </h4>
                <div className="container">
                    <p className="main">
                        Deliveries of orders are made 3-5 days, <emphasis>except Sundays</emphasis>, after placing your orders.
                        After recieving package, please contact our customer service desk to confirm delivery.
                    </p>
                    <p className="main">
                        Thank You Queens and Kings for your consistent patronage! God bless you.
                    </p>
                </div>
            </div>
        );
    }
}

export default DeliveryPolicy;