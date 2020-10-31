import React from "react";
import {
    Card,CardBody, CardLink,
  
} from 'reactstrap';

import faker from 'faker';
class Dashboard extends React.Component {
    render() {
        const Item = () => {
            return (
                <>
                    <div className="dashboard " >
                        <div className="dashboard-item">

                            <Card >
                                <CardBody>
                                {faker.name.firstName() +" " + faker.name.lastName()}
                                    
                                </CardBody>
                             
                                <img  width="300px" src={faker.image.avatar()} alt="Card image cap" />
                                <CardBody>
                                  <CardLink href="#">Book Ride</CardLink>
                                    <CardLink href="#">Add Ride</CardLink>
                                </CardBody>
                            </Card>


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