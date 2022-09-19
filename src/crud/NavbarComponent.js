/** @format */

import React from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
    return (
			<Navbar bg='light' expand='lg'>
				<Container fluid>
					<Navbar.Brand href='#'>Tabel Obat</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: "100px" }} navbarScroll>
							<Nav.Link href='#action1'>Beranda</Nav.Link>
							<Nav.Link href='#action2'>Beli Obat</Nav.Link>
							<NavDropdown title='Lainnya' id='navbarScrollingDropdown'>
								<NavDropdown.Item href='#action3'>Data User</NavDropdown.Item>
								<NavDropdown.Item href='#action4'>Tentang</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action5'>Keluar</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form className='d-flex'>
							<Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
							<Button variant='outline-success'>Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
};

export default NavbarComponent;
