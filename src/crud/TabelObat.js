/** @format */

import React from "react";
import { Table } from "react-bootstrap";

const TabelObat = () => {
	return (
		<Table striped bordered hover size='sm'>
			<thead>
				<tr>
					<th>No</th>
					<th>Nama Obat</th>
					<th>Stok</th>
					<th>Harga</th>
					<th>Aksi</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Haiii</td>
					<td>Indah</td>
					<td>Haiii</td>
					<td>Mentari</td>
					<td>hapus</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default TabelObat;
