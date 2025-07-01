// 미션1. DOM API
//index.js 파일을 생성하고, 파일의 내부에 버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.

//DOM API를 사용하여 요소를 선택하고, 이벤트 리스너를 추가해야 합니다.
const $btn = document.querySelector("button#changeTextButton");
const $text = document.querySelector("p#text");
$btn?.addEventListener("click", () => {
  $text.innerText = "변경 텍스트";
  console.log($text);
});

//미션2. DOM API & Select Tag
//id 가 app인 div 요소의 내부에 아래의 코드들을 넣어주세요.
let $app = document.querySelector("div#app");
const select = document.createElement("select");
select.id = "skills";
const addOption = (text, value) => {
  const option = document.createElement("option");
  option.text = text;
  option.value = value;
  select.appendChild(option);
};
addOption("javascript", "Javascript");
addOption("next", "Next.js");
addOption("react", "React.js");
addOption("typescript", "TypeScript");
$app?.appendChild(select);
select.addEventListener("change", (e) => {
  console.log(e.target.value);
});
