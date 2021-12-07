import React, { Component } from 'react'

class MyPokemonListComponent extends Component {
  render() {
    console.log(this.props.pokemonName)
    return (
      <div className='listPokemonWrapper'>
        <div className='listPokemonItem'>
          <p className='pokemonName'>{this.props.pokemonName.name}</p>
        </div>
      </div>
    )
  }
}

export default MyPokemonListComponent
