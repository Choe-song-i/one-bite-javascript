//미션1. 화살표 함수 작성하기
//두 숫자의 곱을 반환하는 화살표 함수를 작성하고, 3과 4를 인자로 호출하여 결과를 출력하세요.
let multiply = (a, b) => console.log(a * b);
multiply(3, 4);

//미션2. 함수 작성하기
//책의 제목과 저자 이름을 속성으로 가진 book 객체를 만들고, 책의 정보를 반환하는 getSummary 메서드를 작성하세요.
let book = {
  title: "시나리오 워크북",
  name: "시드 필드",
  getSummary: function () {
    console.log(
      `제목 ${this.title}라는 책의 저자는 ${this.name}이고, 시나리오 쓰기의 시작부터 완성까지의 내용을 담고 있습니다.`
    );
  },
};
book.getSummary();

//미션3. 스코프와 함수
//두 숫자 a와 b를 인자로 받아, b에 5를 더한 값을, a에 더한 결과를 반환하는 sumNumbers 함수를 작성하세요.

//힌트:

function sumNumbers(a, b) {
  function addFive(number) {
    //코드 작성
    return number + 5;
  }
  //코드 작성
  return a + addFive(b);
}
console.log(sumNumbers(3, 7)); // 출력: 15 (7에 5를 더한 후 3을 더함)
console.log(sumNumbers(10, 5)); // 출력: 20 (5에 5를 더한 후 10을 더함)```
