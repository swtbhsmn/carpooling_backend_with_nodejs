import React from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import Loading from './loader';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            username: "",
            password: "",


        }
      
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

    }

    onSubmitHandler = (e) => {

        e.preventDefault();
        this.props.props.loginUser(this.state.username, this.state.password);
        setTimeout(() => {
            if (this.props.props.history) {
                this.props.props.history.push('/dashboard');

            }
        }, 1000)


    }
    onValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <>
                <Loading isLoading={this.props.props.loginUserDetails.isLoading} />
                <div className="login">
                <div className="lock-icon">
                <i style={{color:"#fff"}} className="material-icons">lock</i>
                </div>
                    <div className="login-box">
                  
                    <Form>
                    
                    <FormGroup>
                  
                        <Input autoComplete="off" spellCheck="false" type="email" name="username" value={this.state.username} onChange={this.onValueChange} id="exampleEmail" placeholder="Enter Email" />
                    </FormGroup>
                    <FormGroup>
                      
                        <Input autoComplete="off" spellCheck="false"
                     type="password" name="password" value={this.state.password} onChange={this.onValueChange} id="examplePassword" placeholder="Enter Password" />
                    </FormGroup>
                    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                        <Button className="button-login" style={{ width: "100%" }} color="primary" onClick={this.onSubmitHandler} >Login</Button>{' '}

                    </div>
                </Form>
                    </div>
                </div>
          

            </>
        );
    }
}

export default Login;