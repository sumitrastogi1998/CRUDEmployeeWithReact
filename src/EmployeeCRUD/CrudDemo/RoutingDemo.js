import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

class RoutingDemo extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/addEmployee">Add Employee</Nav.Link>
                        <Nav.Link as={Link} to="/listEmployee">Employees List</Nav.Link>
                        <Nav.Link as={Link} to="/updateEmployee">Update Employee</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </React.Fragment>
        )
    }
}

export default RoutingDemo
