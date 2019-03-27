import React, { Component } from 'react';
import Navigation from './Navigation';

class Header extends Component {

    render () {
        return (
            <header className="App-header">
                <Navigation titulo="Star Wars   "/>  
            </header>
        );
    }
}

export default Header;