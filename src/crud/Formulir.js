/** @format */

import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const Formulir = ({nama, stok, harga, handleChange, handleSubmit}) => {
	return (
		<div className='mt-5' size='sm'>
			<Row>
				<Col>
					<h5>Tambah Obat</h5>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Form.Group className='mb-1' controlId='formBasic'>
							<Form.Control type='text' name='nama' placeholder='Nama Obat' value={nama} onChange={(event) => handleChange(event)} />
						</Form.Group>
						<Form.Group className='mb-1' controlId='formBasic'>
							<Form.Label>Stok</Form.Label>
							<Form.Control type='number' name='stok' placeholder='Stok Obat' value={stok} onChange={(event) => handleChange(event)} />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasic'>
							<Form.Label>Harga</Form.Label>
							<Form.Control type='number' name='harga' placeholder='Harga' value={harga} onChange={(event) => handleChange(event)} />
						</Form.Group>
						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default Formulir;
