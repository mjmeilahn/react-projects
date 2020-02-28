import React, { Component } from 'react';

class Boundary extends Component {
    state = {
        isError: false,
        message: ''
    }

    componentDidCatch (err, info) {
        this.setState({
            isError: true,
            message: err
        });
    }

    render () {
        if (this.state.isError) {
            return <h1>{ this.state.message }</h1>
        }
        else {
            return this.props.children;
        }
    }
}

export default Boundary;