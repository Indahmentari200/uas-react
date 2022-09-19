/** @format */
// import React, { Component } from "react";

// versi class component rcc ini komponen yang agak besar
// export default class Navbar extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h2>Hello World</h2>
// 			</div>
// 		);
// 	}
// }

// ada juga versi arrow function rafce ini untuk komponen yang kecil-kecil
import React from "react";

const Navbar = () => {
    return <div>
        <h2>Navbar</h2>
    </div>;
};

export default Navbar;

// versi function component rfc ini udah jarang guys
// import React from "react";

// export default function Navbar() {
// 	return (
// 		<div>
// 			<h2>Navbar</h2>
// 		</div>
// 	);
// }
