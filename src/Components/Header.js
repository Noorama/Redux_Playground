import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const Header = () => {
    // NOTE: Keep in mind, than Nav.Link doesn't keep state when other link is clicked! Use Link insted with "nav-link" class.
    return (
        <div>
            <Container id="myHeader">
                <Row className="align-items-center">
                    <Col sm={2} lg={4}>
                        <Link to="/" className="navbar-brand">Test Redux</Link>
                    </Col>
                    <Col sm={12} lg={8} className="header-right">
                        <Navbar>
                            <Nav>
                                <Link to="/" className ="nav-link">List All</Link>
                                <Link to="/test" className="nav-link">List Other</Link>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Header