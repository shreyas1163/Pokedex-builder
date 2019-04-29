import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import '../assests/css/PokemonDetail.css'

class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            AttributeName: '',
            AttributeValue: '',


        };
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    onSubmit = () => {

        this.setState({
            open: false,
            AttributeName: '',
            AttributeValue: ''
        });
    };
    render() {
        const { open } = this.state;
        if (!this.props.pokemon) {
            return (
                <center><h1>Select a Pokemon</h1></center>
            );
        }
        return (
            <div className="container">
                <div ><center><h1>Details of {this.props.pokemon.name.english} </h1></center></div >
                <div><h3>  Types:{this.props.pokemon.type.join(', ')}</h3></div><br />
                <div><h3>  Attack:{this.props.pokemon.base.Attack}</h3></div><br />
                <div><h3>  Defense:{this.props.pokemon.base.Defense}</h3></div><br />
                <div><button className="btn btn-success" onClick={this.onOpenModal} title="Add New Attribute">Add New Attribute </button></div>
                <Modal open={open} onClose={this.onCloseModal} className="modalLayout" >
                    <div className="modalContent">

                        <div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Attribute Name"
                                value={this.state.AttributeName}
                                onChange={ph => this.setState({ AttributeName: ph.target.value })} required />
                        </div><br />
                        <div>
                            <input
                                type="text"
                                className="form-control outputStream"
                                name="Attribute value"
                                placeholder="Attribute Value"
                                value={this.state.outputStreamName}
                                onChange={e => this.setState({ AttributeValue: e.target.value })} required />
                        </div>
                        <div className="row submitButton">
                            <div className='col-md-5'><div className="submit"><button onClick={this.onCloseModal} className="btn btn-danger">cancel</button></div> </div>
                            <div className='col-md-7'><center><div className="cancel"><button onClick={this.onSubmit} className="btn btn-primary" >Add Attribute</button></div> </center></div>
                        </div>
                    </div>
                </Modal>

            </div >);

    }
}
const mapStateToProps = (state) => {
    return { pokemon: state.selectedPokemon };
}

export default connect(mapStateToProps)(PokemonDetail);