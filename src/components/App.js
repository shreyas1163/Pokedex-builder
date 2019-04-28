import React from 'react';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
// import SearchPokemon from './SearchPokemon';
import 'bootstrap/dist/css/bootstrap.css';
import '../assests/css/app.css'


const App = () => {
    return (<div className="container">
        <div className="row">
            <div className="col-md-6">
                <PokemonList /></div> <div className="col-md-6"><div className="container">
                    <PokemonDetail /></div></div></div></div>);


}
export default App;