import React from 'react';

import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';


export default function NavbarComponent() {
    return (
            <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Cylunny Web</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">About</Nav.Link>
                            <Nav.Link href="/TOS">TOS</Nav.Link>
                            <Nav.Link href="/Commissions">Commissions</Nav.Link>
                            <Nav.Link href="/Customs">Customs</Nav.Link>
                            <NavDropdown title="Species" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Lopilu">Lopilu</NavDropdown.Item>
                                <NavDropdown.Item href="/Gleamstic">Gleamstic</NavDropdown.Item>
                                <NavDropdown.Item href="/Arma Caeli">Arma Caeli</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Lovabuns">Lovabuns</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}