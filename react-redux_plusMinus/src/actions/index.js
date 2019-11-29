import * as types from './ActionTypes';

//ActionTypes 객체를 가져다 사용할 Action 생성자.

export function increment(){
    return{
        type: types.INCREMENT
    };
}

export function decrement(){
    return{
        type: types.DECREMENT
    };
}

export function SET_COLOR(color){
    return{
        type: types.SET_COLOR,
        color   //color: color과 같은 의미.
    };
}
