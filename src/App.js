import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    pokemon:[],
    pokemonInfo:[]
  }


  componentWillMount(){
    axios.get('http://localhost:4000/allpokemon')
    .then((res) => {
      return this.setState({
        pokemon:res.data
      })
    })
    .catch(err => console.log(err))
  }

  handleGetInfo = (event) => {
    console.log(event.target.name)
    const url = event.target.name
    axios.get(`http://localhost:4000/pokemon/${url}`)
    .then((res)=>{
      return this.setState({
        pokemonInfo:res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    var pokemon = this.state.pokemon
    var pokeInfo = this.state.pokemonInfo
    console.log(pokeInfo)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{display:'flex',justifyContent:'center'}}>
          {
            pokemon.map((item,index)=>{
              var url = item.url.split('/')
              return <button onClick={this.handleGetInfo} name={url[6]} key={index}>{item.name}</button>
            })
          }
        </div>
        {
          !!pokeInfo && 
          <div>
          <div>Name: {pokeInfo.name}</div>
          <div>Experience: {pokeInfo.experience}</div>
          <div>Weight: {pokeInfo.weight}</div>
          <div>Height: {pokeInfo.height}</div>
          {
            !!pokeInfo.abilities && pokeInfo.abilities.map((item,index)=>{
              return <div key={index}> Abilites:{item.ability.name}</div>
            })
          }
        </div>
        }
      </div>
    );
  }
}

export default App;
