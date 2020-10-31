import React from "react";
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            cpassword:"",
            photo: ""
        }

        this.onValueChange.bind(this.onValueChange);
    }

    onValueChange = (e)=>{
        this.setState({[e.target.name]:e.target.value })
    }
    render() {
        return (
            <>
                <Form>
                    <FormGroup>
                       
                        <Input autoComplete="off" spellCheck="false" type="text" name="firstname" value={this.state.firstname} onChange={this.onValueChange} id="exampleFirstname" placeholder="Enter Firstname" />
                    </FormGroup>
                    <FormGroup>
                      
                        <Input autoComplete="off" spellCheck="false" type="text" name="lastname" value={this.state.lastname} onChange={this.onValueChange} id="exampleEmail" placeholder="Enter Lastname" />
                    </FormGroup>
                    <FormGroup>
                     
                        <Input autoComplete="off" spellCheck="false" type="email" name="username" value={this.state.username} onChange={this.onValueChange} id="exampleEmail" placeholder="Enter Email" />
                    </FormGroup>
                    <FormGroup>
                    
                        <Input autoComplete="off" spellCheck="false"
                            type="password" name="password" value={this.state.password} onChange={this.onValueChange} id="examplePassword" placeholder="Enter Password" />
                    </FormGroup>
                    <FormGroup>
                    
                    <Input autoComplete="off" spellCheck="false"
                        type="text" name="cpassword" value={this.state.cpassword} onChange={this.onValueChange} id="exampleCPassword" placeholder="Enter Confirm Password" />
                     </FormGroup>
                    <FormGroup>
                        <Label for="examplePhoto">Profile Photo</Label>
                        <Input  type="file" name="photo" value={this.state.photo} onChange={this.onValueChange} id="examplePhoto"  />
                    </FormGroup>
                </Form>
                <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                        <Button className="button-login" style={{ width: "60%" }} color="primary"  >Signup</Button>{' '}

                    </div>
            </>
        );
    }
}

export default Signup;