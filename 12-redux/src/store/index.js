
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialCounterState = {
    counter: 0,
    showCounter: true,
}

// REACT TOOLKIT - USES INTERNAL PACKAGES FOR IMMUTABILITY
const counterSlice = createSlice({
    name: 'counter', // "name" attribute is REQUIRED
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload.amount
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})



const initialAuthState = {
    isAuthenticated: false,
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store