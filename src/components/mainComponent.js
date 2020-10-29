import React from 'react';
import Home from './homeComponent';
import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { loginUser } from '../redux/actionCreator';
import Header from "./header";

const mapStateToProps = state => {

    return {
        loginUserDetails: state.fetchLoginUser,

    };

}

const mapDispatchToProps = dispatch => ({

    loginUser: (username, password) => dispatch(loginUser(username, password)),



})
class MainComponent extends React.Component {

    render() {
        return (
            <div>
                <div >
                    <Header redirect={this.props}/>
                </div>
                <Switch>

                    <Route path='/home' component={(() => {
                        return (
                            <Home/>

                        );
                    })} />
                    <Route path='/dashboard' component={(() => {
                        return (

                            <Dashboard />

                        );
                    })} />

                    <Redirect to="/home" />

                </Switch>

            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));