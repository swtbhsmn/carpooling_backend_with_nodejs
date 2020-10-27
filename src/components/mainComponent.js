import React from 'react';
import Home from './homeComponent';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {loginUser} from '../redux/actionCreator';
const mapStateToProps = state => {

    return {

        info: state,
    };

}

const mapDispatchToProps = dispatch => ({
   
        loginUser:(username,password) => dispatch(loginUser(username,password)),
    


})

const MainComponent = (props) => {
  
    return (

        <Switch>

            <Route  path='/home' component={(() => { return (
                                                    <Home loginUser={props.loginUser}/>
                                                    
                                                    ); })} />
            <Redirect to="/home" />

        </Switch>
   
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));