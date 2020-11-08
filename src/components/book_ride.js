import React from "react";
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
export default class BookRideForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            location:"",
            destination:""
        }
        this.onSubmithandler.bind(this.onSubmithandler);
        this.onChangeValue.bind(this.onChangeValue);
    }

    onChangeValue=(e)=>{
this.setState({[e.target.name]:e.target.value});
    }

    onSubmithandler = ()=>{
        const {location,destination} = this.state;
this.props.bookRideUser({location:location,destination:destination});
    }
    render(){
        return(
            <div>
                    <div className="book-ride-form">
                    <div className="co-box" style={{ width: "100%" }}>
                        <div className="shadow-box" >
                            <div style={{ padding: "10px" }}>
                                <Input type="text" value={this.state.location} onChange={this.onChangeValue} name="location" id="fromgeo" placeholder="Your Location" />
                            </div>
                            <div>
                                
                                <i className="material-icons">compare_arrows</i>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <Input type="text" name="destination" id="togeo"  onChange={this.onChangeValue}  placeholder="Destination" value={this.state.destination}/>
                            </div>


                            <div className="forward"  >
                                <i className="material-icons" onClick={this.onSubmithandler}>forward</i>
                            </div>


                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
