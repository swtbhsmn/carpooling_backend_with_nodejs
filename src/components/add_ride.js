import React from "react";
import {  Input ,Form,FormGroup, Label,Button} from 'reactstrap';

export default class AddRideForm extends React.Component{
    constructor(props){

        super(props);
        this.state={
                    yourloc:"",
                    yourdes:"",
                    person:"",
                    date:"",
                    description:""
        }
        this.onSubmitHandler.bind(this.onSubmitHandler);
        this.onChangeHandler.bind(this.onSubmitHandler);
    }

    onChangeHandler= (e)=>{

            this.setState({[e.target.name]:e.target.value});
    }

    onSubmitHandler = () => {
        const { yourloc,yourdes,date,person,description} = this.state;
        const user = JSON.parse(window.localStorage.getItem("user"));
        
        if(!yourloc){
            alert('Please fill empty fields');

            return;
        }
        else if(!yourdes){
            alert('Please fill empty fields');

            return;
        }
        else if(!person){
            alert('Please fill empty fields');

            return;
        }
        this.props.addRideUser({ username:user.username,location:yourloc,destination:yourdes,date_of_ride:date,person_allowed:person,description:description});
        this.props.addUserRideHistory();

  }
    render(){
 
        return(
            <div>
          
                    <div className="book-ride-form">
                        <div style={{padding:"20px",width:"70%"}}>
                  
                  <Form>
                      <div className="row">
                          <div className="col-md-6">
                              <Label>Your Location</Label>
                          </div>
                          <div className="col-md-6">
                              <Input type="text" onChange={this.onChangeHandler} value={this.state.yourloc} name="yourloc" placeholder="Enter Your Location"/>
                          </div>
                      </div>
                      <div style={{height:"5px"}}></div>
                      <div className="row">
                          <div className="col-md-6 ">
                              <Label> Your Destination</Label>
                          </div>
                          <div className="col-md-6">
                              <Input name="yourdes" onChange={this.onChangeHandler}  value={this.state.yourdes} type="text" placeholder="Enter Your Location"/>
                          </div>
                      </div>
                      <div style={{height:"5px"}}></div>
                      <div className="row">
                          <div className="col-md-6 ">
                              <Label> No of person allowed</Label>
                          </div>
                          <div className="col-md-6">
                              <Input  type="number" name="person" onChange={this.onChangeHandler}  value={this.state.person}  placeholder="No of person" min="0"/>
                          </div>
                      </div>
                      <div style={{height:"5px"}}></div>
                      <div className="row">
                          <div className="col-md-6 ">
                              <Label>Date & Time of Ride</Label>
                          </div>
                          <div className="col-md-6">
                              <Input  name="date" onChange={this.onChangeHandler}  value={this.state.date} type="datetime-local" />
                          </div>
                      </div>
                      <div style={{height:"5px"}}></div>
                      <div className="row">
                          <div className="col-md-12 ">
                              <Label>Description / Additional Conditions (If any)</Label>
                          </div>
                          </div>
                      <div style={{height:"5px"}}></div>
                      <div className="row">
                          
                          <div className="col-md-12">
                              
                              <Input className="ride-description" name="description" onChange={this.onChangeHandler}  value={this.state.description} type="textarea" />
                          </div>
                      </div>
                      
                      <div style={{height:"10px"}}></div>
                      <FormGroup>
                      <div className="row">
                          <div className="col-md-12 ">
                           <Button color="primary" onClick={this.onSubmitHandler} className="btn btn-block">Submit</Button>
                          </div>

                      
                      </div>
                      </FormGroup>
                  </Form>
                  </div>
                     

                    </div>
            </div>
        )
    }
}
