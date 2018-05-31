// a reducer takes two things
// 1. the action - info about what happened
// 2. copy of current state

export default function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES': 
            console.log('incrementing likes!');
            const i = action.index;
            return [
                ...state.slice(0, i), // before the one we update 
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1), // after the one we update
            ]
        default:
            return state;
    }
}