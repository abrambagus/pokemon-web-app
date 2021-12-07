const globalState =  {
    data : [],
} 

const PokemonDetailReducer = (state = globalState, action) =>{
    switch(action.type){
        case "GET_POKEMON_DETAIL":
        return{
            ...state,
            data : action.pokemonDetail
        };
    }   
    return state;
}   

export default PokemonDetailReducer;