/** @format */

import React, { Component } from "react";

export default class Sublifecycle extends Component {
    componentWillUnmount() {
        this.props.Ubahmakanan("Sate")
    }
	render() {
        return <div>
            <h2>Komponen Sublifecycle</h2>
        </div>;
	}
}
