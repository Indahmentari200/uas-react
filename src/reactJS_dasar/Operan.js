/** @format */

import React, { Component } from "react";

export default class Operan extends Component {
	// kapan sebuah state menjadi props, yaitu saat state tersebut dipanggil oleh function yang lain
	render() {
		const { makanan, gantiMakanan } = this.props;
		return (
			<div>
				{/* untuk this.props kita bisa memodifikasinya supaya lebih singkat */}
				<h2> Operan state yang menjadi Props : {makanan}</h2>
				<button onClick={() => gantiMakanan("Soto")}>Ganti Makanan</button>
			</div>
		);
	}
}
