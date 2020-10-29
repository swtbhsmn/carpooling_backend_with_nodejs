import React from "react";
import { Input } from 'reactstrap';
class Home extends React.Component {

    render() {
        return (
            <div >
                
              
                <div >

                    <div className="co-box" style={{ width: "100%" }}>
                        <div className="shadow-box" >
                            <div style={{ padding: "10px" }}>
                                <Input type="text" name="frominput" id="fromgeo" placeholder="Your Location" />
                            </div>
                            <div>
                                <i className="material-icons">compare_arrows</i>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <Input type="text" name="frominput" id="togeo" placeholder="Destination" />
                            </div>


                            <div className="forward"  >
                                <i className="material-icons">forward</i>
                            </div>


                        </div>
                    </div>
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