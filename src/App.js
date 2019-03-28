import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Message from './components/Message';
// import Navigation from './components/Navigation';
// import Image from './components/Image';

class App extends Component {
  state = {
    info: []
  }

async componentDidMount() {
    const dataRaw = await fetch ('https://swapi.co/api/people/')
    const data = await dataRaw.json()

    this.setState({info: data.results})
  }

render() {
  const characters = this.state.info.map(function(character, index){
      return (            
        <div className="col-md-4">
          <div className="card border-info bg-transparent mb-3 mt-4">
            <div className="card-header bg-dark border-info">
              {/* <img src="..." class="card-img" alt="..."/> */}
              <h3><Message
                key={`${character.name}-${index}`}
                color={character.eye_color}
                // site={character.url}
                title={character.name}
                /></h3>
              <span className="badge badge-pill badge-dark ml-2">
                {character.gender}
              </span>
            </div>        
            <div className="card-body text-white">
              <p>Año de nacimiento: {character.birth_year}</p>
              <p>Estatura: {character.height} cms.</p>
              <p>Peso: {character.mass} kgs.</p> 
{/*           ==============PENDIENTE==============          
              <p>Planeta: {character.homeworld}</p> 
              ===================================== */}

            </div>
          </div>        
        </div>               
      )
    });


    return (      
      <div className="App">
        <Header />
      <div className="container">
        <div className="row">
          { characters }
        </div>
      </div>

        {/* <div className="container">          
          <div className="row mt-4">
            <div className="col-md-4 text-center"> 
              <Message
                color="blue"
                title="Google"
                site="https://google.com/"
              />
              </div>
              <div className="col-md-4 text-center"> 
              <Message
                color="green"
                title="Facebook"
                site="https://facebook.com/"
              /> 
              </div>
            </div>
          </div> */}
      </div>
    );
  }
  }

export default App;
