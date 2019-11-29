// reducer는 변화를 일으키는 함수이면서 순수함수이다.
// 리듀서의 3가지 원칙 : 비동기작업 X, 인수 변경 X, 동일한 인수 = 동일한 결과
// *** 리듀서는 이전 상태를 변경하는 것이 아닌, 그저 새로운 상태를 반환하는 것이다!

import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
    counter, ui
});

export default reducers;
