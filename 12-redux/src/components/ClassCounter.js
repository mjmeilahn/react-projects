import { Component } from 'react'
import classes from './Counter.module.css'
import { connect } from 'react-redux'

// THIS COMPONENT CONNECTS TO STORE VIA PLAIN METHOD WHICH IS NOT SUPPORTED IN THIS EXAMPLE. NO STATE WILL UPDATE.

class ClassCounter extends Component {
    constructor() {
        super()
    }

    incrementHandler() {
        this.props.increment()
    }

    decrementHandler() {
        this.props.decrement()
    }

    render() {
        return (
            <main className={classes.counter}>
                <h1>Class Component Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                    <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'increment' }),
        decrement: () => dispatch({ type: 'decrement' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter)
