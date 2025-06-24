//미션1. switch case문 작성하기
let animal = "cat";
switch (animal) {
  case "tiger":
    console.log("호랑이");
    break;
  case "cat":
    console.log("고양이");
    break;
  case "dog":
    console.log("강아지");
    break;
  default:
    console.log("다른 동물");
}

//미션2. 함수 작성하기
let answer = "";
function connectStrings(str1, str2) {
  answer = str1 + str2;
}
connectStrings("hello ", "javascript");
console.log(answer); // 출력결과 : hello javascript
