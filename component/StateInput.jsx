import { useState } from 'react';

function StateInput() {
  const arr = useState('');
  // text = 상태(state)
  const text = arr[0];
  // setDate = 상태를 변경시키는 함수
  const setText = arr[1];
  //const [text, setText] = useState('');

  console.log(text);
  // input태그가 변할때마다 호출되는 핸들러
  function handleOnChange(event) {
    // 상태변경 함수를 호출
    setText(event.target.value);
    // 1. 상태(text)변수의 값을 변경
    // 2. 변경된 값으로 리렌더링한다.
  }
  return (
    <div>
      <input value={text} onChange={handleOnChange} />
    </div>
  );
}

export default StateInput;
