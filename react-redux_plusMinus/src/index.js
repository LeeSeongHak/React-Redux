import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';

import { Provider } from 'react-redux';

//import * as actions from './actions';
 
const store = createStore(reducers);

// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.SET_COLOR([200, 200, 200]));

// unsubscribe();

// store.dispatch(actions.increment());

ReactDOM.render(
    <Provider store={store}>
     <App/>
    </Provider>, 
    document.getElementById('root')
);