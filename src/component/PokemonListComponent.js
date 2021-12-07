import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PokemonListComponent extends Component {
  render() {
    return (
      <div className='listPokemonWrapper'>
        <Link to={`/pokemon-detail/${this.props.pokemonName}`}>
          <div className='listPokemonItem'>
            <p className='pokemonName'>{this.props.pokemonName}</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default PokemonListComponent
