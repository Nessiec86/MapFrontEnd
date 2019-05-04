import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Error extends Component {
    
    state = { 
        error: null, 
        errorInfo: null
    };
    
    
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }
    
    render() {
        console.log(this.state)
        if (this.state.errorInfo) {
            // Error path
         return (
                <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br/>
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
    }
    // Normally, just render children
    return this.props.children;
}  
}



export default withAuth(Error);