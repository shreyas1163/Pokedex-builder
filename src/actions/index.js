// Action Creaters
export const selectPokemon = pokemon => {
    return {
        type: 'POKEMON_SELECTED',
        payload: pokemon
    };
};