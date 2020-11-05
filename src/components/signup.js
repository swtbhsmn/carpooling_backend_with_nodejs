import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import Loading from './loader';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            cpassword: "",
            photo: null,
            image: "",
            imgbox: "none"
        }


        this.onValueChange.bind(this.onValueChange);
        this.onSubmitHandler.bind(this.onSubmitHandler);
    }

    onValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    onImageChange = (event) => {

        if (event.target.files && event.target.files[0]) {

        
        }

        this.setState({
            image: URL.createObjectURL(event.target.files[0]),
            imgbox: "block",
            photo: event.target.files[0]
        });

    }


    onSubmitHandler = (e) => {

        e.preventDefault();

        
        const { firstname, lastname, username, password, photo } = this.state;
        if(firstname.length === 0){
            alert(`Firstname field required!`);
            return;
        }
        if(lastname.length === 0){
            alert(`Lastname field required!`);
            return;
        }
        if(username.lenght === 0 ){
            alert(`Username field required!`);
            return;
        }
        if(!password){
            alert(` Password field required!`);
            return;
        }
        if(password !== this.state.cpassword){
            alert(` Password not matched with confirm password.`);
            return;
        }
        if(!photo ){
            alert(`Profile photo field required!`);
            return;
        }
        let formData = new FormData();
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("photo", photo, this.state.photo.name);
        this.props.props.signupUser(formData);
      
    

    }

    render() {
       
        return (
            <>
                <div className="signup">
                   <Loading isLoading={this.props.props.signupUserDetails.isLoading}/>
                    <div className="signup-box">
                        <Form id="signup-form">

                            <FormGroup>
                                <div className="row">
                                    <div className="col-md-3"><Label>Firstname</Label></div>
                                    <div className="col-md-9"> <Input autoComplete="off" spellCheck="false" type="text" name="firstname" value={this.state.firstname} onChange={this.onValueChange} id="exampleFirstname" placeholder="Enter Firstname" required />
                                    </div>
                                </div>


                            </FormGroup>
                            <FormGroup>
                                <div className="row">
                                    <div className="col-md-3">Lastname</div>
                                    <div className="col-md-9">        <Input autoComplete="off" spellCheck="false" type="text" name="lastname" value={this.state.lastname} onChange={this.onValueChange} id="exampleLastname" placeholder="Enter Lastname" />
                          </div>
                                </div>
                          </FormGroup>
                            <FormGroup>
                            <div className="row">
                                    <div className="col-md-3">Username</div>
                                    <div className="col-md-9">       <Input autoComplete="off" spellCheck="false" type="email" name="username" value={this.state.username} onChange={this.onValueChange} id="exampleEmail" placeholder="Enter Email" />
                           </div>
                                </div>
                          </FormGroup>
                            <FormGroup>
                            <div className="row">
                                    <div className="col-md-3">Password</div>
                                    <div className="col-md-9">        <Input autoComplete="off" spellCheck="false"
                                    type="password" name="password" value={this.state.password} onChange={this.onValueChange} id="examplePassword" placeholder="Enter Password" />
                          </div>
                                </div>
                          </FormGroup>
                            <FormGroup>
                            <div className="row">
                                    <div className="col-md-3">Confirm Password</div>
                                    <div className="col-md-9">         <Input autoComplete="off" spellCheck="false"
                                    type="text" name="cpassword" value={this.state.cpassword} onChange={this.onValueChange} id="exampleCPassword" placeholder="Enter Confirm Password" />
                          </div>
                                </div>
                         </FormGroup>
                            <FormGroup style={{ display: this.state.imgbox }}>
                                <img width="100px" height="100px" src={this.state.image} alt="profile photo" />
                            </FormGroup>

                            <FormGroup>
                            <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-9"></div>
                                </div>
                                <Label for="examplePhoto">Profile Photo</Label>
                                <Input type="file" name="photo" onChange={this.onImageChange} id="examplePhoto" />

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