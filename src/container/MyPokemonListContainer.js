import React, { Component } from 'react'
import PokemonListComponent from '../component/PokemonListComponent'
import { connect } from 'react-redux'

class MyPokemonListContainer extends Component {
  render() {
    return (
       <PokemonListComponent pokemonName={this.props.myPokemonName.data} />
      // <div>{this.props.myPokemonName.data}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myPokemonName: state.myPokemonName,
  }
}

export default connect(mapStateToProps)(MyPokemonListContainer)
