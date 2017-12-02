import React, {Component} from 'react';

import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar color="dark" dark={true}>
                <NavbarBrand href="/">Allocation UI</NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;