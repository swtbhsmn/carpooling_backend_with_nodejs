import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
} from 'reactstrap';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isOpen: false
        }

        this.toggleButton.bind(this.toggleButton);
        this.LoginButton.bind(this.LoginButton);
        this.logoutButton.bind(this.logoutButton);
        this.SignupButton.bind(this.SignupButton);

    }

    toggleButton = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    LoginButton = () => {
        this.props.redirect.history.push('/login');
        this.setState({ isOpen: !this.state.isOpen });
    }
    SignupButton = () => {
        this.props.redirect.history.push('/signup');
        this.setState({ isOpen: !this.state.isOpen });
    }
    logoutButton = () => {
        window.localStorage.removeItem("user");
        this.props.redirect.history.push('/home');
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        const Toolnav = () => {

            if (window.localStorage.getItem("user") === null) {
                return (
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                <NavLink className="text-white" href="/about">About</NavLink>
                            </NavItem>



                        </Nav>
                        <NavbarText><Button style={{ cursor: "pointer", background: "#fff", color: "#000", marginRight: "5px" }} onClick={this.SignupButton}>Signup</Button></NavbarText>


                        <NavbarText><Button style={{ cursor: "pointer", background: "#fff", color: "#000" }} onClick={this.LoginButton}>Login</Button></NavbarText>
                    </Collapse>
                );
            }
            else {
                return (
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="text-white" href="/dashboard">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>

                                <NavLink className="text-white" href="/about">About</NavLink>
                            </NavItem>



                        </Nav>


                        <NavbarText><Button style={{ cursor: "pointer", background: "#fff", color: "#000" }} onClick={this.logoutButton}>Logout</Button></NavbarText>
                    </Collapse>
                );
            }
        }
        return (
            <div className="">

                <Navbar className="navbar-fixed-top header-bar" light expand="md">
                    <NavbarBrand className="text-white" href="/">CarPooling</NavbarBrand>
                    <NavbarToggler onClick={this.toggleButton} />

                    <Toolnav />
                 
                </Navbar>



            </div>
        )
    }
}

export default Header;