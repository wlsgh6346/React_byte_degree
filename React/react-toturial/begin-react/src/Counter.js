import React, { useReducer, Component } from 'react'
// function reducer(state, action){
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             throw new Error('Unhandled action');
//     }
// }
// function Counter() {
//
//     const [number, dispatch] = useReducer(reducer, 0);
//     const onIncrease = () => {
//         dispatch({
//             type:'INCREMENT',
//         })
//     }
//     const onDecrease = () => {
//         dispatch({
//             type:'DECREMENT',
//         })
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//
//     )
// }

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {  // 무조건 객체여야 함
            counter: 0,
            fixed: 1,
            updateMe: {
                toggleMe: false,
                dontChangeMe: 1,
            }
        }
        // this.handleIncrease = this.handleIncrease.bind(this);
        // this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleIncrease = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // });

        this.setState(state => ({
            counter: state.counter+1,
        }))

        // console.log(this);  // button event 등록되는 과정에서 관계가 끊겨버림
        console.log('increase');
    }
    handleDecrease = () => {
        this.setState({
            counter: this.state.counter -1,
        });
        console.log('decrease');
    }
    handleToggle = () => {
        this.setState({
            updateMe: {
                ...this.state.updateMe,
                toggleMe: !this.state.updateMe.toggleMe
            }
        })
    }
    render() {
        return  (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p> 고정된 값 : {this.state.fixed}</p>
            </div>
        );
    }
}
export default Counter;