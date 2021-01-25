/*jshint esversion: 6 */

import React,{ Component } from 'react';
import { PieceInfo } from '../data';

const InfoContext = React.createContext();

// Provider(i.e provides the data)
// Consumer(i.e consumes the data)

class InfoProvider extends Component {

    state = {
        info: PieceInfo
    }

    render() {
        return (
          <InfoContext.Provider value= {{
              info: this.state.info
            }}>
              {this.props.children}
          </InfoContext.Provider>
        );
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };