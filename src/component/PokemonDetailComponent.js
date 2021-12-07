import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    handleGetMyPokemonName: PropTypes.func
  };


class PokemonDetailComponent extends Component {

    catchPokemon (pokemonName) {
        this.props.handleGetMyPokemonName(pokemonName);
    }


    render(){
            return(
            <div className="detailpage">
                    <div className="detailpage-wrapper">
                        <div className="detailpage-bigimage">
                            <img src={this.props.pokemonImg.front_default} alt=""/>
                        </div>
                        <div className="detailpage-box">
                            <div className="detailpage-row">
                                <h2>{this.props.pokemonName}</h2>
                                {this.props.pokemonTypes.map(types => {
                                    return <div className="detailpage-type"> {types.type.name} </div>
                                })}
                            </div>
                            <p>Height : {this.props.pokemonHeight}</p>
                            <p>Weight : {this.props.pokemonWeight}</p>
                            <div className="detailpage-smallimage">
                                <img src={this.props.pokemonImg.back_default} alt=""/>
                                <img src={this.props.pokemonImg.front_shiny} alt=""/>
                                <img src={this.props.pokemonImg.back_shiny} alt=""/>
                            </div>
                            <button className="btn-catch" onClick = {() => this.catchPokemon(this.props.pokemonName)}>
                                Catch Pokemon    
                            </button>  
                        </div>
                    </div>
                    
                    <div className="detailpage-subtitle-stats">
                        <h1>Stats</h1>
                    </div>
                    <div className="detailpage-statsdetail">
                        {this.props.pokemonStats.map(stats => {
                            return <li>
                                 <span>{stats.stat.name} {stats.base_stat}</span>
                            </li>
                        })}
                    </div>
                                
                    <div className="detailpage-subtitle-abilities">
                        <h1>Abilities</h1>
                    </div>
                    <div className="detailpage-abilitiesdetail">
                        {this.props.pokemonAbilities.map(abilities => {
                            return <li>
                                <span>{abilities.ability.name}</span>
                            </li>
                         })}
                    </div>
                                    
                    <div className="detailpage-subtitle-moves">
                        <h1>Moves</h1>
                    </div>
                    <div className="detailpage-movesdetail">
                         {this.props.pokemonMoves.map(moves => {
                            return <li>
                                <span>{moves.move.name}</span>
                             </li>
                         })}
                    </div>

            </div>
        )
    }
}

PokemonDetailComponent.propTypes = propTypes;

export default PokemonDetailComponent;