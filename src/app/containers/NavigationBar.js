import React, {Component} from 'react';

import {
    Navbar, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu,
    DropdownItem
} from 'reactstrap';

import './NavigationBar.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <Navbar color="dark" dark={true} fixed="top" expand={true}>
                <NavbarBrand href="/">Allocation</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>
                                Workspace
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Load Customer Choices</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
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