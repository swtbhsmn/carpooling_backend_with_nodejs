import React from 'react';
import Home from './homeComponent';
import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { loginUser, signupUser, addRide,bookRide,addUserRideHistory} from '../redux/actionCreator';
import Header from "./header";
import Signup from './signup';
import Login from './login';
import About from "./about";

const mapStateToProps = state => {

    return {
        loginUserDetails: state.fetchLoginUser,
        signupUserDetails:state.fetchSignupUser,
        addRideUserdetails:state.addRideUser,
        bookRideUserDetails:state.bookRideUser,
        rideUserHistory:state.rideUserHistory

    };

}

const mapDispatchToProps = dispatch => ({

    loginUser: (username, password) => dispatch(loginUser(username, password)),
    signupUser:(formData) => dispatch(signupUser(formData)),
    addRide:(userData) => dispatch(addRide(userData)),
    bookRide:(book)=>dispatch(bookRide(book)),
    addUserRideHistory:()=>dispatch(addUserRideHistory())
   

})


class MainComponent extends React.Component {

    componentDidMount=()=>{
     

        console.log(this.props);
        
    }

    render() {
        return (
            <div>
                <div className="header-box">
                    <Header redirect={this.props} />
                </div>
                <Switch>

                    <Route path='/home' component={(() => {
                        return (
                            <Home props={this.props} />

                        );
                    })} />
                      <Route path='/about' component={(() => {
                        return (
                            <About/>

                        );
                    })} />
                    <Route path='/dashboard' component={(() => {
                        return (

                            <Dashboard  props={this.props} addUserRideHistory={this.props.addUserRideHistory}/>

                        );
                    })} />

                    <Route path='/signup' component={(() => {
                        return (


                            <Signup props={this.props}/>
                        );
                    })} />

                    <Route path='/login' component={(() => {
                        return (


                            <Login props={this.props} />
                        );
                    })} />


                    <Redirect to="/home" />

                </Switch>

            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));