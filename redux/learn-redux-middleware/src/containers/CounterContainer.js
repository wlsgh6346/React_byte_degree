import React from "react";
import Counter from "../components/counter";
import { useSelector, useDispatch } from "react-redux";
import {increaseAsync, decreaseAsync} from "../modules/Counter";

function CounterContainer() {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increaseAsync());   // 이 결과물이 바로 미들웨어에서 리턴하는 result이다.
    };

    const onDecrease = () => {
        dispatch(decreaseAsync());
    };
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
}

export default CounterContainer;