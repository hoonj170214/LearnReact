import React, { useState } from 'react';

function StateSelect() {
  // 상태값 받기 상태명 option
  const [option, setOption] = useState('');
  const onChangeHandle = (e) => {
    setOption(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <select value={option} onChange={onChangeHandle}>
        <option key='1번'>1번</option>
        <option key='2번'>2번</option>
        <option key='3번'>3번</option>
      </select>
    </div>
  );
}

export default StateSelect;
