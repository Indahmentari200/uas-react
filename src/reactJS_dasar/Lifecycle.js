/** @format */

import React, { Component } from "react";
import Sublifecycle from "./Sublifecycle";

export default class Lifecycle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			makanan: "Bakso",
            data: {},
            tampilHalamanSub: false
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
            .then((json) => {
                this.setState({
                    data : json
                })
            });
    }
    Ubahmakanan(value) {
        this.setState({
            makanan: value
        })
    }
    render() {
        console.log("Data : ", this.state.data)
		return (
			<div>
                <h2>{this.state.makanan}</h2>
                {this.state.tampilHalamanSub && <Sublifecycle Ubahmakanan={ (value)=> this.Ubahmakanan(value)} />}
                <button onClick={() => this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })}>Tampilkan Halaman Sub</button>
				{/* <h2>{this.state.data.title}</h2> */}
			</div>
		);
	}
}
