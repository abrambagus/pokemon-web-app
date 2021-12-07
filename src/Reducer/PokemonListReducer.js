const globalState =  {
    data : []
} 

const PokemonListReducer = (state = globalState, action) =>{
    switch(action.type){
        case "GET_POKEMON_NAME":
        return{
            ...state,
            data : action.pokemonName
        };
        default:

    }   
    return state;
}   

export default PokemonListReducer;