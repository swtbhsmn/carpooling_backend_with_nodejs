import React from 'react';
import Home from './homeComponent';
import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {loginUser} from '../redux/actionCreator';
import Header from "./header";

const mapStateToProps = state => {

    return {
        loginUserDetails:state.fetchLoginUser,
        
    };

}

const mapDispatchToProps = dispatch => ({
   
        loginUser:(username,password) => dispatch(loginUser(username,password)),
    


})
class MainComponent extends React.Component {
  
  render(){
    return (
<div>
<div style={{height:"60px"}}>
    <Header  loginUser={this.props.loginUser} />
</div>
        <Switch>

            <Route  path='/home' component={(() => { return (
                                                    <Home loginUser={this.props.loginUser} />
                                                    
                                                    ); })} />
             <Route  path='/dashboard' component={(() => { return (

                     <Dashboard  />
             
             ); })} />

            <Redirect to="/home" />

        </Switch>
       
</div>
    );
  }
   
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));