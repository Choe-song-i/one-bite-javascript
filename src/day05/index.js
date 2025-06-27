//sumAndDouble이라는 함수를 작성하세요. 이 함수는 여러 개의 숫자를 인자로 받아:
//1.Rest 연산자를 사용하여 모든 인자를 하나의 배열로 받습니다.
//2.받은 숫자들을 모두 더합니다.
//3.배열의 모든 숫자에 2를 곱한 새로운 배열을 반환합니다. (배열 메서드 map을 사용하세요.)
// 내가 푼 문제
let sum = 0;
let arr = [];
const sumAndDouble = (...rest) => {
  rest.map((item) => {
    sum += item;
    arr.push(item * 2);
  });
  return `1:${rest}, 2:${sum}, 3:${arr} `;
};
console.log(sumAndDouble(1, 2, 3, 4));

//멘토님 정답
function sumAndDouble2(...numbers) {
  //reduce()
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  //acc: 누적 값
  //curr: 현재 값
  //마지막0: 인덱스
  //+ :누적 값에 현재 값을 더 함
  const doubled = numbers.map((num) => {
    num * 2;
    //상수 doubled에 numbers를 곱하지 2해서 대입함
  });
  return { sum, doubled };
}

console.log(sumAndDouble2(1, 2, 3, 4));
// 출력: { sum: 10, doubled: [2, 4, 6, 8] }
