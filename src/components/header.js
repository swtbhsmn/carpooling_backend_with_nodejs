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
    Button,
    Modal, ModalBody
} from 'reactstrap';
import Login from "./login";
import Signup from "./signup";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isLoginOpen: false,
            isSignup: false,
            user: {
                username: "",
                password: ""
            }
        }

        this.toggleButton.bind(this.toggleButton);
        this.toggleLoginButton.bind(this.toggleLoginButton);
        this.logoutButton.bind(this.logoutButton);
        this.toggleSignupButton.bind(this.toggleSignupButton);
    }

    toggleButton = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    toggleLoginButton = () => {
        this.setState({ isLoginOpen: !this.state.isLoginOpen });
    }
    toggleSignupButton = () => {
        this.setState({ isSignup: !this.state.isSignup });
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
                                <NavLink className="text-white" href="/components/">About</NavLink>
                            </NavItem>



                        </Nav>
                        <NavbarText><Button style={{ cursor: "pointer", background: "#fff", color: "#000", marginRight: "5px" }} onClick={this.toggleSignupButton}>Signup</Button></NavbarText>


                        <NavbarText><Button style={{ cursor: "pointer", background: "#fff", color: "#000" }} onClick={this.toggleLoginButton}>Login</Button></NavbarText>
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

                                <NavLink className="text-white" href="/components/">About</NavLink>
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
                <Modal isOpen={this.state.isLoginOpen} toggle={this.toggleLoginButton} style={{ top: "25%" }} >
                    <div style={{ width: "100%" }} onClick={this.toggleLoginButton}><i style={{ cursor: "pointer", float: "right" }} className="material-icons">close</i></div>
                    <ModalBody>

                        <Login toggleLoginButton={this.toggleLoginButton} props={this.props.redirect} />


                    </ModalBody>


                </Modal>

                <Modal isOpen={this.state.isSignup} toggle={this.toggleSignupButton} style={{ top: "10%" }} >
                    <div style={{ width: "100%" }} onClick={this.toggleSignupButton}><i style={{ cursor: "pointer", float: "right" }} className="material-icons">close</i></div>
                    <ModalBody>

                        <Signup />


                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

export default Header;