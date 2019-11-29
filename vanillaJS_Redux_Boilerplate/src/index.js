import { createStore } from 'redux';

//vanillaJS이므로 DOM 직접 생성.
const lightDiv = document.getElementsByClassName('light')[0];
const switchButton = document.getElementById('switch-btn');

const counterHeadings = document.getElementsByTagName('h1')[0];
const plusButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');


//리덕스의 3가지 원칙

//1.Single Source of Truth. 하나의 어플리케이션 안에는 하나의 스토어가 있다.
//(FLUX와의 주요 차이점. FLUX는 여러개의 store를 사용한다.)

//2.State is read-only. 상태는 읽기 전용.
//The only way to mutate the static is to emit an action, an object describing what happened.

//3.Change are mad with Pure Functions. 변화는 순수 함수로 만들어져야 한다.
//action 객체는 Reducer 함수에 의해 처리된다. Reducer는 '순수 함수'로만 정의되어야 한다.
//순수 함수 : 외부 네트워크 혹은 DB에 접근하지 않아야한다. / return값은 오직 parameter 값에만 의존되어야한다.
//          인수는 변경되지 않아야한다. / 같은 인수로 실행된 함수는 언제나 같은 결과를 반환해야 한다.
//          순수하지 않은 API호출을 하지 말아야 한다. (Date 및 Math의 함수 등)


// 액션 타입 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션 생성함수 정의. 액션 함수는 반드시 type을 가지고 있어야 한다.
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increment = diff => ({ type: INCREMENT, diff });
const decrement = () => ({ type: DECREMENT });

// 초깃값 설정
const initialState = {
    light: false,
    counter: 0
};

// 리듀서 함수 정의. 리듀서는 변화를 일으키는 함수. 파라미터는 state와 action.
// 리듀서에서는 불변성을 유지해주면서 데이터에 변화를 일으켜주어야하기 때문에 spread 연산자(...state 부분)를 사용하면 편하다.
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 기존의 값은 그대로 두면서
                light: !state.light // light 값 반전시키기
            };
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.diff
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            // 지원하지 않는 액션의 경우 상태 유지
            return state;
    }
}

// 스토어 만들기
const store = createStore(reducer);

// render 함수 만들기
const render = () => {
    const state = store.getState(); // 현재 상태를 가져옵니다.
    const { light, counter } = state; // 편의상 비구조화 할당
    if (light) {
        lightDiv.style.background = 'green';
        switchButton.innerText = '끄기';
    } else {
        lightDiv.style.background = 'gray';
        switchButton.innerText = '켜기';
    }
    counterHeadings.innerText = counter;
};

render();

// 구독하기 - 컴포넌트에서 sotre에 특정 데이터의 변동을 주의하고 있다가 변동이 발생했을 때 바로 반영시키는 것을 의미함.
// react에서는 react-redux 라이브러리가 대신 subscribe해주므로 
// 리엑트 외의 라이브러리에 리덕스 연동할 때를 제외하고는 사용할 일이 거의 없다.
store.subscribe(render);

// 디스패치 - 액션을 발생 시키는 것. 스토어의 내장함수 dispatch를 사용한다. 파라미터는 액션 객체.
// 디스패처는 작업이 중첩되지 않도록 해준다.
// 이벤트 달아주기, 액션 발생 시키기
switchButton.onclick = () => {
    store.dispatch(toggleSwitch());
}

plusButton.onclick = () => {
    store.dispatch(increment());
}

minusButton.onclick = () => {
    store.dispatch(decrement());
}
