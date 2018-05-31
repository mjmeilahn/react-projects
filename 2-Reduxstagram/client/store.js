import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import localStorage plugin
import persistState from 'redux-localstorage';

// import the root reducer
import rootReducer from './reducers/index';

// import initial state
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const enhancer = compose(persistState());

const store = createStore(rootReducer, defaultState, enhancer);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
