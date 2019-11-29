//리듀서에서 먼저 해야할 것은 사용할 action types를 불러오는 것.
import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0
};

//리듀서의 파라미터인 action은 액션 생산자 함수를 사용하게 될 때 이를 통해서 만든 액션들이다.
//index.js에서 액션 생산자 함수를 통해 액션을 만들면 dispatch를 통해 reducer에 전달이 된다.
//그러면 ActionType에 따라서 어떤 작업을 할지 정하고 추가적인 정보가 있을 경우 이용한다.
//reducer에서 if문을 사용해도 되긴 하지만 보통은 switch문을 많이 사용한다. action의 갯수가 많으면 많을수록 switch가 편하기 때문.
export default function counter(state = initialState, action){
    
    switch(action.type){
        case types.INCREMENT:
            return{
                ...state,
                number: state.number + 1
            }
        case types.DECREMENT:
            return{
                ...state,
                number: state.number - 1
            }
        default:
            return state;
    }
}




