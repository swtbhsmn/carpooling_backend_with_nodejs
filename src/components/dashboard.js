import React from "react";
import {
    Card, CardBody, CardLink, Button, Badge

} from 'reactstrap';

import faker from 'faker';
import BookRideForm from "./book_ride";
import AddRideForm from "./add_ride";
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            displayBook: 'none',
            displayAdd: 'none'
        }
        this.displayBlock.bind(this.displayBlock);
        this.historyHandler.bind(this.historyHandler);
        
    }


    displayBlock = (e) => {

        this.setState({ displayBook: "block", displayAdd: "none" });
    }

    displayAddBlock = (e) => {

        this.setState({ displayBook: "none", displayAdd: "block" });
    }
    componentDidMount() {
        const userData = JSON.parse(window.localStorage.getItem("user"));
        this.setState({ user: userData });
       

    }
    historyHandler = ()=>{
        this.props.addUserRideHistory();
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
                                                    <div className="col-md-2 book-btn"> <Button color="primary">Book</Button></div>
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

        const BookRide = () => {
            return (
                <div>

                    <div className="container book-ride ">
                        <Card>
                            <div className="book-container home-component">
                                <BookRideForm bookRideUser={this.props.props.bookRide} />
                            </div>
                        </Card>
                    </div>

                </div>
            )
        }

        const AddRide = () => {

            return (

                <div>

                    <div className="container book-ride">
                        <Card>
                            <div className="book-container">
                                <AddRideForm addRideUser={this.props.props.addRide} addUserRideHistory={this.props.addUserRideHistory} />
                            </div>
                        </Card>
                    </div>

                </div>
            )
        }
        const Item = () => {

            return (
                <>

                    <div className="dashboard " >

                        <div className="dashboard-item">

                            <Card >


                                <img width="100%" height="200px" src={this.state.user.photo} alt="Card image cap" />
                                <CardBody>
                                    {this.state.user.firstname + " " + this.state.user.lastname}

                                </CardBody>
                            </Card>

                            <div style={{ padding: "20px", width: "100%" }} >

                                <Button color="primary" className="btn btn-block" onClick={this.displayBlock}>Book Ride</Button>
                                <Button color="primary" className="btn btn-block" onClick={this.displayAddBlock}>Add Ride</Button>

                            </div>
                        </div>
                        <div className="container-x">
                            <div style={{ display: this.state.displayBook }}>
                                <BookRide />
                            </div>
                            <div style={{ display: this.state.displayAdd }}>
                                <AddRide />
                            </div>


                            <div className=" container recent-drive">

                                <SearchRide />
                                <Card>
                                    <div style={{ minHeight: "100px" }} >
                                        <CardBody>
                                            <div className="history-btn">
                                            <Button color="primary" onClick={this.historyHandler}>Check Recent History</Button>
                                            </div>
                                        
                                    {this.props.props.rideUserHistory.rideHistory.map((items, keys) => {
                                            return (
                                                <div key={keys} style={{ marginBottom: "10px" }}>


                                                    <Card>
                                                        <div style={{ padding: "10px" }}>
                                                            {keys + 1}
                                                        </div>

                                                        <CardBody>
                                                            <div className="row">
                                                                <div className="col-md-10">
                                                                    <p>Location: {items.location}</p>
                                                                    <p>Destination: {items.destination}</p>
                                                                    <p>Time of travel: {items.date_of_ride}</p>
                                                                </div>
                                                                <div className="col-md-2"><i className="material-icons pointer">delete</i></div>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            )
                                        })}
                                        </CardBody>
                                    </div>
                                </Card>
                            </div>

                        </div>





                    </div>
                </>
            )
        }
        return (
            <>
                <Item />
            </>
        )
    }
}
export default Dashboard;