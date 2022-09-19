/** @format */

import React, { Component} from "react";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import TabelObat from "./TabelObat";

export default class Crud extends Component {
	constructor(props) {
		super(props);
		this.state = {
			obats: [],
			nama: "",
			stok: 0,
			harga: 0,
			id: "",
		};
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name] : event.target.value,
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			obats: [
				...this.state.obats,
				{
					id: this.state.obats.length + 1,
					nama: this.state.nama,
					stok: this.state.stok,
					harga: this.state.harga,
				},
			],
		});
	};

	render() {
		return (
			<div>
				<NavbarComponent />
				<div className='container mt-3'>
					<TabelObat />
					<Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleChange} />
				</div>
			</div>
		);
	}
}
