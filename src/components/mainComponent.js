import React from 'react';
import Home from './homeComponent';
import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { loginUser,signupUser } from '../redux/actionCreator';
import Header from "./header";
import Signup from './signup';
import Login from './login';


const mapStateToProps = state => {

    return {
        loginUserDetails: state.fetchLoginUser,
        signupUserDetails:state.fetchSignupUser,


    };

}

const mapDispatchToProps = dispatch => ({

    loginUser: (username, password) => dispatch(loginUser(username, password)),
    signupUser:(formData) => dispatch(signupUser(formData)),
   

})


class MainComponent extends React.Component {



    render() {
        return (
            <div>
                <div className="header-box">
                    <Header redirect={this.props} />
                </div>
                <Switch>

                    <Route path='/home' component={(() => {
                        return (
                            <Home />

                        );
                    })} />
                    <Route path='/dashboard' component={(() => {
                        return (

                            <Dashboard  />

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