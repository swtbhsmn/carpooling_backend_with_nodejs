import React from 'react';
import { Button, Form, FormGroup, Label, Input,} from 'reactstrap';


class Login extends React.Component {
    constructor(props){
        super(props);
     this.state={

         username:"",
         password:"",
  

     }

     this.onSubmitHandler = this.onSubmitHandler.bind(this);
     this.onValueChange = this.onValueChange.bind(this);

    }
  
    onSubmitHandler=(e)=>{

        e.preventDefault();
        this.props.loginUser(this.state.username,this.state.password);
        console.log(this.props);
       
   
    }
    onValueChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <>
              <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input  type="email" name="username" value={this.state.username} onChange={this.onValueChange} id="exampleEmail" placeholder="Enter Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" value={this.state.password} onChange={this.onValueChange}id="examplePassword" placeholder="Enter Password" />
                            </FormGroup>
                            <div style={{width:"100%",justifyContent:"center",display:"flex"}}>
                            <Button className="button-login" style={{width:"60%"}} color="primary" onClick={this.onSubmitHandler}>Login</Button>{' '}
                      
                            </div>
                        </Form>
                      
            </>
        );
    }
}

export default Login;