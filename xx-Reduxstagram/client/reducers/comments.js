// a reducer takes two things
// 1. the action - info about what happened
// 2. copy of current state

function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            // return the new state with new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }]
        case 'REMOVE_COMMENT':
            // return new state without comment
            return [
                // from the start to the one we want to delete
                ...state.slice(0, action.i),
                // after the deleted one, to the end of array
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
}

export default function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // copy the current state
            ...state, 
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}