import React from "react";
import {Spinner } from "reactstrap";

class  Loading  extends React.Component {

    render(){
        return (
           
            <div className="overly">

            <div className="spinnerx">
            <Spinner  color="success" />
            </div>
    
             </div>
          );
    }
  
  }
  
  export default Loading;