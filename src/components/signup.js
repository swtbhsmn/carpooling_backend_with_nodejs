import React from "react";
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            cpassword: "",
            photo: "",
            image: "",
            imgbox:"none"
        }


        this.onValueChange.bind(this.onValueChange);
        this.onSubmitHandler.bind(this.onSubmitHandler);
    }

    onValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
                image: URL.createObjectURL(event.target.files[0]),
                photo:event.target.files[0].name,
                imgbox:"block"
            });
           
        }
    }
    onSubmitHandler = ()=>{
        console.log(`${this.state.firstname} ${this.state.lastname} ${this.state.username} ${this.state.password} ${this.state.photo}`);
    }
    render() {
        return (
            <>
                <div className="signup">
                    <div className="signup-box">
                        <Form>

                            <FormGroup>

                                <Input autoComplete="off" spellCheck="false" type="text" name="firstname" value={this.state.firstname} onChange={this.onValueChange} id="exampleFirstname" placeholder="Enter Firstname" />
                            </FormGroup>
                            <FormGroup>

                                <Input autoComplete="off" spellCheck="false" type="text" name="lastname" value={this.state.lastname} onChange={this.onValueChange} id="exampleLastname" placeholder="Enter Lastname" />
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
                            <FormGroup style={{display:this.state.imgbox}}>
                                <img width="100px" height="100px" src={this.state.image} alt="profile photo" />
                            </FormGroup>

                            <FormGroup>

                                <Label for="examplePhoto">Profile Photo</Label>
                                <Input type="file" name="photo"  onChange={this.onImageChange} id="examplePhoto" />

                            </FormGroup>

                            <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                                <Button onClick={this.onSubmitHandler} className="button-login" style={{ width: "100%" }} color="primary"  >Signup</Button>{' '}

                            </div>
                        </Form>

                    </div>
                </div>
            </>
        );
    }
}

export default Signup;