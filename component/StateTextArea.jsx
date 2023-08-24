import React, { useState } from 'react';

// <textarea> 본문을 상태값으로 받고 변경시키는 컴포넌트 만들기
function StateTextArea() {
  const [text, setText] = useState('');
  const handleOnChange = (e) => {
    console.log(e.target.value);
    // 정규식을 활용하여 입력 제한을 둘 수 있다.
    // /[^0-9]/g : 숫자가 아닌 경우
    e.target.value.replace(/[^0-9]/g, '');
    // 상태 변경 함수를 호출
    setText(e.target.value);
    // 1. 상태(text) 변수의 값을 변경
    // 2. 변경된 값으로 리렌더링 한다.
  };
  return (
    <div>
      <textarea
        type='text'
        value={text}
        onChange={handleOnChange}
        placeholder='숫자만 입력해주세요'
      >
        <p>{text}</p>
      </textarea>
    </div>
  );
}

export default StateTextArea;
