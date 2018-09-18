import React, { Component } from 'react';

class ErrorBoundry extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            hasError : false
        }
    }

    componentDidCatch( error, info ) {
        this.setState({ hasError : true })
    }

    render() {
        if ( this.state.hasError ) {
            return <h1>Ooops. That's not good for user to see</h1>
        }
        return this.props.children; // children will be everything that will be between boundry
    }
}

export default ErrorBoundry;