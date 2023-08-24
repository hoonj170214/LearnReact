import { useState } from 'react';

function StateHook() {
  // useState : 리액트의 훅, 사용하기위해서는 import 해야한다.
  // 매개변수는 상태(state)의 초기값
  // Return값으로 [상태(state), 상태를 변경시키는 함수(setter)] 배열을 받는다.
  const [count, setCount] = useState(0);
  // const로 선언했기 때문에 불변 객체라서 count += 1; 이런식으로 쓰면 안된다.
  // state는 불변객체(캡슐화되어있다.)
  // setter 써야 한다. (setCount)
  console.log('Component를 렌더링');
  // state의 값이 변하게 되면 (set 함수를 사용하면)
  // 컴포넌트를 다시 호출하게 된다. 다시 렌더링하게 된다. (리렌더링)
  function onIncrease() {
    setCount(count + 1);
  }
  return <h2>{count}</h2>;
}

export default StateHook;
