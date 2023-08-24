import './App.css';
import PropsSpread from './component/PropsSpread';
import Parent from './component/Parent';
import Child from './component/Child';
import Header from './component/Header';
import EventHandle from './component/eventHandle';
import StateHook from './component/StateHook';
import StateInput from './component/StateInput';
import StateInputDate from './component/StateInputDate';
import StateSelect from './component/StateSelect';
import StateTextArea from './component/StateTextArea';
import StateProps from './component/StateProps';
import StateMulti from './component/StateMulti';
function App() {
  const name = '리액트 JSX';
  const personProps = {
    name: '홍길동',
    age: 30,
    skillList: ['react', 'js', 'java'],
  };
  return (
    <div className='App'>
      <Header />
      <StateProps />

      {/*
      <StateMulti />
      <EventHandle />
      <StateHook />
      <StateInput />
      <StateInputDate />
      <StateSelect />
      <StateTextArea />
      <Parent>
        <Child />
      </Parent>
      <PropsSpread {...personProps} />
  */}
    </div>
  );
}

export default App;
