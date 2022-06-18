import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Pokédex_logo from './Pokédex_logo.webp';

class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <h1 className='title'>
          <img src={Pokédex_logo} alt={'Pokédex'}/>
        </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
