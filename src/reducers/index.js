import { combineReducers } from 'redux';

import { pokemonList } from '../assests/pokemon'
const pokemonReducer = () => {
    return pokemonList
}

const selectedPokemonReducer = (selectedPokemon = null, action) => {
    if (action.type === 'POKEMON_SELECTED') {
        return action.payload;

    }
    return selectedPokemon;
};
export default combineReducers({
    pokemonList: pokemonReducer,
    selectedPokemon: selectedPokemonReducer
})