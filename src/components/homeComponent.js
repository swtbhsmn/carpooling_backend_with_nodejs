import React from "react";

import {
    Card, CardBody, Button,Input

} from 'reactstrap';
class Home extends React.Component {
constructor(props){
    super(props);
    this.state={
        location:"",
        destination:""
    }
    this.onSubmithandler.bind(this.onSubmithandler);
    this.onChangeValue.bind(this.onChangeValue);
    this.goToLogin.bind(this.goToLogin);
}
goToLogin=()=>{
    alert("First Login then You Book!");
}

onChangeValue=(e)=>{
    this.setState({[e.target.name]:e.target.value});
        }
    
        onSubmithandler = ()=>{
            const {location,destination} = this.state;
            this.props.props.bookRide({location:location,destination:destination});
        }
    render() {


        const SearchRide = () => {
            if (this.props.props.bookRideUserDetails.bookedRide.length !== 0) {
                return (
                    <div style={{ marginBottom: "10px" }}>
                        <Card>

                            <CardBody>
                                Search Result
                            {this.props.props.bookRideUserDetails.bookedRide.map((i, k) => {

                                return (
                                    <div style={{ marginTop: "10px" }} keys={k}>
                                        <Card >
                                            <CardBody>
                                                <div className="row">
                                                    <div className="col-md-10"><b>Location: {i.location} </b> <br /><b>Destination:{i.destination}</b><br />
                                                        <b>Date: {i.date_of_ride}</b>
                                                        <p><b>Description:</b>  {i.description}</p>

                                                    </div>
                                                    <div className="col-md-2 book-btn"> <Button color="primary" onClick={this.goToLogin}>Book</Button></div>
                                                </div>

                                            </CardBody>
                                        </Card>
                                    </div>
                                )

                            })}

                            </CardBody>

                        </Card>
                    </div>
                )
            }
            else {
                return (<div style={{ display: "none" }}></div>)
            }
        }

        return (
            <div >

                <div className="home-component" >

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
           <SearchRide/>
                    <div className="title-box">
                        <h2>Your Ride, Your Choice!</h2>
                        <b>Find your destination here!</b>
                        <span><i className="fa fa-map-marker" style={{ fontSize: "40px" }}></i></span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;