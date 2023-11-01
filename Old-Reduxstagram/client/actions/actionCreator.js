// increment
export function increment(index) {
    console.log('dispatching INCREMENT_LIKES!');
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment
export function addComment(postId, author, comment) {
    console.log('dispacting ADD_COMMENT!');
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment(postId, i) {
    console.log('dispatching REMOVE_COMMENT!');
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}



