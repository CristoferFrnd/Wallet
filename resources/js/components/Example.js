import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import url from '../url';
import TransferForm from './TransferForm';
import TransferList from './TransferList';

export default class Example extends Component {

    constructor(props) {
        super(props);

        this.state = {
            money: 0.0,
            transfers: [],
            error: null,
            form: {
                description: '',
                amount: '',
                wallet_id: 1,
            }

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault();
        try {   
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/api/transfer`, config),
            data = await res.json();

            this.setState({
                transfers: this.state.transfers.concat(data),
                money: this.state.money + (parseInt(data.amount))
            })
            
        } catch (err) {
            this.setState({
                err
            })
        }
    }

    handleChange(e) {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    async componentDidMount() {
        try {
            let res = await fetch(`${url}/api/wallet`),
                data = await res.json();
            this.setState({
                money: data.money,
                transfers: data.transfers,
            })
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 m-t-md d-flex justify-content-center">
                        <p className="title"> $ {this.state.money} </p>
                    </div>
                </div>

                <div className="col-md-12">
                    <TransferForm form={this.state.form} onChange={this.handleChange} onSubmit={this.handleSubmit} />
                </div>
                <div className="m-t-md">
                    <TransferList transfers={this.state.transfers} />
                </div>
            </div>
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

