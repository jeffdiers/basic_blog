import React, { Component } from 'react'
import { Link } from 'react-router'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

export default class Main extends Component{
    render() {
        return (
            <div>
                <Navbar color="inverse" inverse full toggleable>
                    <div className="container">
                        <NavbarBrand tag={Link} to="/">Journal</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/new-entry">New Entry</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <br />
                <div className="container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
                <br />
            </div>
        )
    }
}

