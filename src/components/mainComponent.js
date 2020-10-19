import React from 'react';
import Home from './homeComponent';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => {

    return {

        info: state,
    };

}

const mapDispatchToProps = dispatch => ({

  

})

const MainComponent = (props) => {

    return (

        <Switch>

            <Route  path='/home' component={(() => { return (
                                                    <Home/>
                                                    
                                                    ); })} />
            <Redirect to="/home" />

        </Switch>
   
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));