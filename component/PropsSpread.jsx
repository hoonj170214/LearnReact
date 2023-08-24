function PropsSpread({ name, age, skillList = [] }) {
  // 텅빈 배열을 기본값으로 줘서 skillList(배열)이 비어있을 때의 에러를 방지
  // 기본값을 설정해서 , 전달되지 않았을 때의 오류를 방지한다.
  // spread 연산자 {...props}를 통해서
  // 전달받은 객체의 키값으로 props로 전달받고
  // 구조분해 할당으로 변수로 받는다.
  // const { name, age, skillList } = props;

  return (
    <div>
      <h1>
        {name}은 {age}세 입니다.
      </h1>
      <h2>{skillList.length}개의 기술을 가지고 있습니다</h2>
    </div>
  );
}
// Props가 전달되지 않았을 경우, 기본값
PropsSpread.defaultProps = {
  skillList: [],
};

export default PropsSpread;
