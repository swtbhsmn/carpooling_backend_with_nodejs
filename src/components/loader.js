import React from "react";
import {Spinner } from "reactstrap";

class  Loading  extends React.Component {

    render(){
        if(this.props.isLoading){
            return( <div className="overly">

            <div className="spinnerx">
            <Spinner  color="success" />
            </div>
    
             </div>);
        }else{
            return(<div style={{display:"none"}}></div>)
        }
       
    }
  
  }
  
  export default Loading;