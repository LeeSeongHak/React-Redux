import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

// Redux 관련 불러오기
import { createStore } from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux';

// 스토어 생성. chrome의 redux devtools 확장 프로그램 사용을 위해 reducers 이외의 extension 추가.
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);