import {combineReducers} from 'redux';
import PokemonListReducer from './PokemonListReducer';
import PokemonDetailReducer from './PokemonDetailReducer';
import MyPokemonReducer from './MyPokemonReducer';

const RootReducer =  combineReducers({
    pokemonName : PokemonListReducer,
    pokemonDetail : PokemonDetailReducer,
    myPokemonName : MyPokemonReducer
  });

  export default RootReducer;