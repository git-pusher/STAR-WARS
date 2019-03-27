import React from 'react';
import logo from '../../src/logo.png';

class Image extends React.Component {
    render () {
        return (
            <img src={logo} className="App-logo" alt="logo" />
        );
    }
}

export { Image };