import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/index'

// COMMENTED OUT AREAS IN FUNCTION HANDLERS ARE PLAIN WAYS TO UPDATE STATE USING PLAIN "react-redux"

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    // dispatch({ type: 'increment' })
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    // dispatch({
    //   type: 'increase',
    //   amount: 5 // HARD CODED FOR DEMO PURPOSES
    // })

    dispatch(counterActions.increase({
      amount: 5
    }))
    // OR USE THIS ... YOU'D NEED TO EXTRACT THE PAYLOAD IN THE REDUCER
    // dispatch(counterActions.increase(5))
  }

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' })
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' })
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Functional Component Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
