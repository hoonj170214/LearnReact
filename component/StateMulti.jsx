import React, { useState } from 'react';

function StateMulti() {
  const [state, setState] = useState({
    name: '',
    gender: '',
    birth: '',
    text: '',
    // name: '',
    // key 가 중복되면 앞에 있던 값은 없어지고 , 뒤 값만 남음
  });

  const onChangeHandler = (e) => {
    console.log('현재 타겟 : ', e.target.name);
    console.log('수정할 값 : ', e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  /*  상태관리를 각각으로 할 경우 
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const [text, setText] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };
*/
  return (
    <div>
      <input
        type='text'
        name='name'
        value={state.name}
        placeholder='이름을 입력하세요'
        onChange={onChangeHandler}
      />
      <div>
        <select value='{gender}' onChange={onChangeHandler} name={state.gender}>
          <option key=''></option>
          <option key='남성'>남성</option>
          <option key='여성'>여성</option>
        </select>
      </div>
      <input
        type='text'
        name='birth'
        value={state.birth}
        onChange={onChangeHandler}
      />
      <textarea
        value={state.text}
        id=''
        cols='30'
        rows='10'
        name={state.text}
        onChange={onChangeHandler}
      ></textarea>
    </div>
  );
}

export default StateMulti;
