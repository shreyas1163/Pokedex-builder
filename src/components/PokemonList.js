import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPokemon } from '../actions';
import Modal from 'react-responsive-modal';
import '../assests/css/PokemonDetail.css'
import Pagination from 'react-js-pagination';
// import $ from "jquery";
// import '../'



class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            pokemonName: '',
            pokemonType: '',
            pokemonAttack: '',
            pokemonDenfense: '',
            pokemonList: [],
            current: 1
        };
    }

    handlePageChange(pageNumber) {
        this.setState({
            current: pageNumber,
        });
    }

    onSearch = (e) => {
        document.getElementById('searchbar').addEventListener('keyup', e => {
            let val = e.target.value.toLowerCase();

            let matches = this.props.pokemonList.filter(v => v.name.english.toLowerCase().includes(val));
            this.setState({
                pokemonList: matches
            })
        });

    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    onSubmit = () => {
        if (this.state.pokemonName.trim() !== '' && this.state.pokemonType.trim() !== '' && this.state.pokemonAttack.trim() !== '' && this.state.pokemonDenfense.trim() !== '') {


            let pokemonData = {
                pokemonName: this.state.pokemonName,
                pokemonType: this.state.pokemonType.split(','),
                pokemonAttack: this.state.pokemonAttack,
                pokemonDefense: this.state.pokemonDefense

            }
            this.state.pokemonList.push(pokemonData)
            this.props.onSubmitData(pokemonData)
            this.setState({ open: false, inputStreamName: '', outputStreamName: '', arrayCounter: this.state.arrayCounter + 1 });

        }


        // this.setState({ open: false });
    };

    renderList() {

        return this.props.pokemonList.map((pokemon) => {
            return (
                <div key='{pokemon.id}' className="container">
                    <div className="row">
                        <div className="col-md-6" id="pokemonName"><center><h3>{pokemon.name.english}</h3></center></div>
                        <div className="col-md-6">
                            <center><button className="btn btn-primary"
                                onClick={() => this.props.selectPokemon(pokemon)}>
                                Detials</button></center>
                        </div>

                    </div><br />

                    {/* <div className="content"></div> */}
                </div>
            );
        })
    }
    render() {
        const { open } = this.state;
        return (<div className="container">
            <div className="row">
                {/* <div className="col-md-6"> */}
                {/* <div className="search-container">
                        <form action="/action_page.php">
                        <input type="text" id="searchbar" placeholder="Search.." name="search" onChange={(e) => this.onSearch(e)} />
                        <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div> */}
                {/* </div> */}
                <div className="col-md-12">
                    <div ><center><h1>Pokemon List </h1></center></div><br /></div></div>

            {this.renderList()}
            <div >
                <center><button className="btn btn-success"
                    onClick={this.onOpenModal}>
                    Add New Pokemon</button></center>
            </div>
            {/* <Pagination
                firstPageText='First'
                lastPageText='Last'
                activePage={this.state.current}
                itemsCountPerPage={1}
                totalItemsCount={this.props.pokemonList.length}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
            /> */}

            <Modal open={open} onClose={this.onCloseModal} className="modalLayout" >
                <div className="modalContent">

                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="inputStreamName"
                            placeholder="Pokemon Name"

                            value={this.state.inputStreamName}
                            onChange={ph => this.setState({ pokemonName: ph.target.value })} required />
                    </div><br />
                    <div>
                        <input
                            type="text"
                            className="form-control outputStream"
                            name="outputStreamName"
                            placeholder="Pokemon Type"

                            value={this.state.outputStreamName}
                            onChange={e => this.setState({ pokemonType: e.target.value })} required />
                    </div><br />
                    <div>
                        <input
                            type="number"
                            className="form-control"
                            name="inputStreamName"
                            placeholder="Pokemon Attack"

                            value={this.state.inputStreamName}
                            onChange={ph => this.setState({ pokemonAttack: ph.target.value })} required />
                    </div><br />
                    <div>
                        <input
                            type="number"
                            className="form-control outputStream"
                            name="outputStreamName"
                            placeholder="Pokemon Defense"

                            value={this.state.outputStreamName}
                            onChange={e => this.setState({ pokemonDefense: e.target.value })} required />
                    </div><br />
                    <div className="row submitButton">
                        <div className='col-md-5'><div className="submit"><button onClick={this.onCloseModal} className="btn btn-danger">cancel</button></div> </div>
                        <div className='col-md-7'><center><div className="cancel"><button onClick={this.onSubmit} className="btn btn-primary" >Add Pokemon</button></div> </center></div>
                    </div>
                </div>
            </Modal>
        </div>);
    }

}




const mapStateToProps = (state) => {
    return {
        pokemonList: state.pokemonList
    };

}
export default connect(mapStateToProps, { selectPokemon })(PokemonList);
