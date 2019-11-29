import React from 'react';
import Counter from './Counter';
import propTypes from 'prop-types';

import './CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {

    const counterList = counters.map(
        (counter, i) => (
            <Counter 
                key={i}
                index={i}
                {...counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        )
    );

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    counters: propTypes.arrayOf(propTypes.shape({
        color: propTypes.string,
        number: propTypes.number
    })),
    onIncrement: propTypes.func,
    onDecrement: propTypes.func,
    onSetColor: propTypes.func
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default CounterList;