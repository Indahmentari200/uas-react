/** @format */

import React from "react";
const makanan = [
	{
		makanan: "Kari Ayam",
		harga: 9000,
	},
	{
		makanan: "Nasi Liwet",
		harga: 17000,
	},
	{
		makanan: "Nasi Timbel",
		harga: 10000,
	},
	{
		makanan: "Sayur Bayam",
		harga: 8000,
	},
];
/* reduce, yaitu untuk mentotalkan semua jumlah item */
const total_bayar = makanan.reduce((total_harga, makanan) => {
	return total_harga + makanan.harga;
}, 0);
 
export const Map = () => {
	return (
		<div>
			<h2>Map Sederhana</h2>
			<ul>
				{makanan.map((mkn, index) => (
					<li>
						{index + 1} {mkn.makanan} - {mkn.harga}
					</li>
				))}
			</ul>
			<h2>Map Filter (Harga lebih kecil dari 10.000)</h2>
			<ul>
				{makanan
					.filter((makanan) => makanan.harga < 10000)
					.map((mkn, index) => (
						<li>
							{index + 1} {mkn.makanan} - {mkn.harga}
						</li>
					))}
            </ul>
            <h2>Total Harga : {total_bayar}</h2>
		</div>
	);
};
