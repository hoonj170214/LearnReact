import { useState } from 'react';

function StateInputDate() {
  const [date, setDate] = useState('');
  function handleOnChange(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <input type='date' value={date} onChange={handleOnChange}></input>
    </div>
  );
}

export default StateInputDate;
