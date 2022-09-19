/** @format */

// state dan props yaitu suatu model data dari react js secraa kasar bisa dibilang sebagai suatu variabel yang bisa dipakai untuk menyimpan data. Adapun perbedaannya yaitu :
// props hanya read-only, tidak bisa dimodifikasi
// state bisa asyncrhronous dan bisa dimodifikasi  dengan menggunakan this.setState
// state dan props sebaiknya dipakai menggunakan class component karena jika kita menggunakan arrow component atau function component nantinya ada cara tersendiri untuk membuat state yakni dengan menggunakan use state

import React, { Component } from "react";
import Operan from "./Operan";

export default class StateProps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			makanan: "Bakso",
		};
    }
    // ini untuk cara dua ygy
    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan: makanan_baru
        })
    }
	render() {
		return (
			<div>
				<h2>{this.state.makanan}</h2>
				{/* bisa dua cara ygy */}
				{/* <button onClick={() => this.setState({ makanan: "Soto" })}>Ubah Makanan</button> */}
				{/* ini cara yang kedua ya guysss */}
				<button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button>
				<Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan} />
			</div>
		);
	}
}
