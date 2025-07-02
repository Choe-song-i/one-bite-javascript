//미션1. 자바스크립트의 this
//다음 코드에서 regularFunction과 arrowFunction이 있습니다.

//두 함수 모두 this가 어떻게 작동하는지 확인하기 위해 각각 this.value를 출력하려고 합니다.

//각 함수의 this가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 this.value를 출력할 수 있도록 코드를 수정하세요. (주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!!)

const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요? =>obj. value(42)
  },
  arrowFunction: () => {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요? =>Window에서 value를 찾을수 없음
  },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)
//자신만의 this 바인딩을 가지지 않고, 상위 스코프(부모)의 this를 그대로 사용 하기 때문

//-----------------------------------------------------------------------------
// arrowFunction이 상위 스코프(부모)의 this를 가져올수 있도록 생성자 함수로 바꿈
function obj2(value) {
  (this.value = value), //상위 스코프(부모)의 this
    (this.regularFunction = function () {
      console.log(`regularFunction수정: ${this.value}`);
    }),
    (this.arrowFunction = () => {
      console.log(`arrowFunction수정: ${this.value}`);
    });
}
let Fun = new obj2(42);
Fun.regularFunction();
Fun.arrowFunction();
