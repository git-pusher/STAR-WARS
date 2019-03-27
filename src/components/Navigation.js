import React, { Component } from 'react';
import { Image } from '../components/Image';

class Navigation extends Component {
     render () {
         return (
             <nav className="navbar navbar-expand-lg navbar-dark">
                <a href="/"  className="text-white "> 
                    {               
                    this.props.titulo 
                    }
                </a> 
                <div>
                    <Image />
                </div>  
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>                          */}
             </nav>
         );
     }
 }

export default Navigation;