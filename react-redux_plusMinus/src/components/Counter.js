import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
//import { connect, bindActionCreators } from 'react-redux';
import * as actions from '../actions';

//똑똑한 컴포넌트
class Counter extends Component {
    constructor(props){
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor(){
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];

        this.props.handleSetColor(color);
    }

    render(){

        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]},${color[1]},${color[2]})`
        };

        return(
            <div style={style}>
                <Value number={this.props.number}/>
                <Control 
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    }
}

//여기서 파라미터 state는 기존 컴포넌트에 있던 state와 다르다. 그냥 파라미터 이름이 state인 것일 뿐임.
const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    };
}

const mapDispatchToProps = (dispatch) => {
    //return bindActionCreators(actions, dispatch);
    return {
        handleIncrement: () => {dispatch(actions.increment())},
        handleDecrement: () => {dispatch(actions.decrement())},
        handleSetColor: (color) => {dispatch(actions.SET_COLOR(color))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);