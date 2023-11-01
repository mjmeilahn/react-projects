
import { createStore } from 'redux'

const initialState = {
    counter: 0,
    showCounter: true,
}

// PLAIN WAY TO UPDATE STATE (NOT REACT TOOLKIT)
const counterReducer = (state = initialState, action) => {
    // ALWAYS RETURN EVERY PROPERTY FROM INITIAL STATE WHEN STATE IS UPDATED - EACH RETURN IS A STATE SNAPSHOT THAT WILL OVERRIDE PREVIOUS STATE. FOLLOW THIS PATTERN TO KEEP REDUX IMMUTABLE.
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        }
    }
    if (action.type === 'increase') {
        // ANY VALUE OR PROPERTY CAN BE ADDED TO "action"
        // IT'S JUST A PLAIN JAVASCRIPT OBJECT --
        // -- SO HERE WE'VE ADDED THE "amount" PROPERTY
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    }
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state
}
const store = createStore(counterSlice.reducer)

export default store