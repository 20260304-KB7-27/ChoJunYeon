/*
클로저
- 반환된 내부 함수가 자신이 선언됐을때의 환경인 스코프를 기억하여,
- 자신이 선언되었을때의 환경 밖에서도 스코프에 접근 할 수 있는 함수
*/
function outer() {

    let count = 0;

    function inner() {
        count++; // outer 함수의 지역변수

        console.log(count);

    }

    return inner; //함수를 호출하는 것이 아니라 함수 자체를 반환하는 것임
}

// outer()();
// outer()();
// outer()();

const counter = outer(); //반환받은 inner()

counter();
counter();
counter();