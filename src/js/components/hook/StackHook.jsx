import React, { useState, useEffect, useReducer } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `clicked ${count}`;
  });
/* reducer 的使用 */ 
  const inital = {number : 0};
  function reducer(state, action){
    switch (action.type){
      case 'increment':
        return {number: state.number + 1};
      case 'decrement':
        return {number: state.number - 1};
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, inital);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>{state.number}</p>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export default Example;
