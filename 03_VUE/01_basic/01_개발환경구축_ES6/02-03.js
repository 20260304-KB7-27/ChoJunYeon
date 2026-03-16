// const
// 재할당을 금지
// 주소값을 변경하지 않는 이상(할당된 객체가 변경되지 않는 이상) 객체 부분 내용 변경 허용
const p1 = {name: 'john', age: 20};

// 객체 내부 값은 변경이 가능
p1.age = 22;
p1.nick = 'bear';

console.log(p1);

//주소값 변경되기 때문에 에러발생
// 새로운 객체를 할당하는 것은 안됨. TypeError 발생
//p1 = {name: 'lee', age: 25};

