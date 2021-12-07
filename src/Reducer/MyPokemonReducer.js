const globalState =  {
    myPokemon : [],
} 

const MyPokemonReducer = (state = globalState, action) =>{
    switch(action.type){
        case "GET_MY_POKEMON_NAME":
        return{
            ...state,
            data : action.myPokemonName
        };
    }   
    return state;
}   

export default MyPokemonReducer;