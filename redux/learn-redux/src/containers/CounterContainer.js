import React from "react";
import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import {decrease, increase, setDiff} from "../modules/counter";

function CounterContainer({
    number,
    diff,
    increase,
    decrease,
    setDiff
}) {
    return <Counter
    number={number}
    diff={diff}
    onIncrease={increase}
    onDecrease={decrease}
    onSetDiff={setDiff}
    />
}

const mapStateToProps = (state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
});

const mapDispatchToProps = {
    increase,
    decrease,
    setDiff
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);