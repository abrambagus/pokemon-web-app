import React, { Component } from 'react'
import PokemonListComponent from '../component/PokemonListComponent'
import axios from 'axios'
import { connect } from 'react-redux'

class PokemonListContainer extends Component {
  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((result) => {
      let pokemonName = result.data.results
      this.props.handleGetPokemonName(pokemonName)
    })
  }

  render() {
    const pokemonName = this.props.pokemonName.data
    return pokemonName.map((pokemonName) => {
      return <PokemonListComponent pokemonName={pokemonName.name} />
    })
  }
}

const mapStateToProps = (state) => {
  return {
    pokemonName: state.pokemonName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetPokemonName: (pokemonName) =>
      dispatch({ type: 'GET_POKEMON_NAME', pokemonName: pokemonName }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonListContainer)
