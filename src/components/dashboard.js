import React from "react";
import {
    Card,CardBody, CardLink,Button
  
} from 'reactstrap';

import faker from 'faker';

class Dashboard extends React.Component {
    
  
    render() {
        const user = JSON.parse(window.localStorage.getItem("user"));

        const Item = () => {
           
            return (
                <>

                    <div className="dashboard " >
                     
                        <div className="dashboard-item">

                            <Card >
                            
                             
                                <img  width="100%" height="200px" src={user.photo} alt="Card image cap" />
                                <CardBody>
                                    {user.firstname+" " + user.lastname}
                                    
                                </CardBody>
                            </Card>

                            <div style={{padding:"20px",width:"100%"}} >

                                <Button color="primary" className="btn btn-block">Book Ride</Button>
                                <Button color="primary" className="btn btn-block">Add Ride</Button>

                            </div>
                        </div>
                        <div className="container-x">



                            <div className="recent-drive">
                            <Card>
                                <div style={{height:"calc(100vh - 300px)"}}>
                                <CardBody>
                                        Recent Ride
                                                                
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