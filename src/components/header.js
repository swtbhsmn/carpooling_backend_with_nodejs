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
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isLoginOpen: false,
            user: {
                username: "",
                password: ""
            }
        }

        this.toggleButton.bind(this.toggleButton);
        this.toggleLoginButton.bind(this.toggleLoginButton);
        this.logoutButton.bind(this.logoutButton);
    }

    toggleButton = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    toggleLoginButton = () => {
        this.setState({ isLoginOpen: !this.state.isLoginOpen });
    }
    logoutButton = ()=>{
    window.localStorage.removeItem("user");
    this.props.redirect.history.push('/home');
    }
    render() {
        const Toolnav = () => {

            if (window.localStorage.getItem("user") === null) {
                return (
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                <NavLink href="/components/">About</NavLink>
                            </NavItem>



                        </Nav>
                        <NavbarText><Button style={{ cursor: "pointer", background: "#fff", color: "#000", marginRight: "5px" }} onClick={this.toggleLoginButton}>Signup</Button></NavbarText>


                        <NavbarText><Button style={{ cursor: "pointer", background: "#fff", color: "#000" }} onClick={this.toggleLoginButton}>Login</Button></NavbarText>
                    </Collapse>
                );
            }
            else {
                return (
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                <NavLink href="/components/">About</NavLink>
                            </NavItem>



                        </Nav>


                        <NavbarText><Button style={{ cursor: "pointer", background: "#fff", color: "#000" }} onClick={this.logoutButton}>Logout</Button></NavbarText>
                    </Collapse>
                );
            }
        }
        return (
            <div className="">

                <Navbar className="navbar-fixed-top" color="light" light expand="md">
                    <NavbarBrand href="/">CarPooling</NavbarBrand>
                    <NavbarToggler onClick={this.toggleButton} />
                    <Toolnav />
                </Navbar>
                <Modal isOpen={this.state.isLoginOpen} toggle={this.toggleLoginButton} style={{ top: "25%" }} >
                    <div style={{ width: "100%" }} onClick={this.toggleLoginButton}><i style={{ cursor: "pointer", float: "right" }} className="material-icons">close</i></div>
                    <ModalBody>

                        <Login toggleLoginButton={this.toggleLoginButton} props={this.props.redirect} />


                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

export default Header;