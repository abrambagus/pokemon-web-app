import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';
import PokemonDetailComponent from '../component/PokemonDetailComponent';
import _ from 'lodash';

const propTypes = {
    handleGetMyPokemonName: PropTypes.func
  };

class PokemonDetailContainer extends Component{

    componentDidMount(){
        let name = this.props.match.params.name
         Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((result)=>{
            let pokemonDetail = result.data
            this.props.handleGetPokemonDetail(pokemonDetail, name);
        })
    }

    render(){
        const pokemonDetail = this.props.pokemonDetail.data;
        let name = this.props.match.params.name;
        console.log(this.props.match.params);
        if(_.isEqual(name, pokemonDetail.name)){
            return(
                <PokemonDetailComponent
                pokemonName = {pokemonDetail.name} 
                pokemonImg = {pokemonDetail.sprites}
                pokemonTypes = {pokemonDetail.types}
                pokemonHeight = {pokemonDetail.height}
                pokemonWeight = {pokemonDetail.weight}
                pokemonStats = {pokemonDetail.stats}
                pokemonAbilities = {pokemonDetail.abilities}
                pokemonMoves = {pokemonDetail.moves}
                handleGetMyPokemonName = {this.props.handleGetMyPokemonName} />
            )
        }
        
        else {
            return <p>LOADING</p>
        }
    }
}

PokemonDetailContainer.propTypes = propTypes;

const mapStateToProps = (state)=>{
    return{
        pokemonDetail : state.pokemonDetail,
        myPokemonName : state.myPokemonName
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleGetPokemonDetail : (pokemonDetail) =>dispatch({type : "GET_POKEMON_DETAIL", pokemonDetail : pokemonDetail}),
        handleGetMyPokemonName : (myPokemonName) =>dispatch({type : "GET_MY_POKEMON_NAME", myPokemonName : myPokemonName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailContainer);