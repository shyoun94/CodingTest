// 문제13 : 몇 번째 행성인가요?

const space = ["수성","금성","지구","화성","목성","토성","천왕성","해왕성"];

let num = window.prompt("몇 번째 행성이 궁금하신가요 1~8까지");

let planet = space[num-1];
console.log(`${num}번째 행성은 ${planet}입니다`);

// 문제14 : 3의 배수 인가요?

let number = Math.floor(Math.random()*1000);

if(number % 3 === 0){
  console.log(`입력: ${number}`);
  console.log("출력: 짝!");
}
else{
  console.log(`입력: ${number}`);
  console.log(`출력: ${number}`);
}

// 문제15 : 자기소개

let myName = window.prompt("이름을 입력하세요");
console.log(`안녕하세요 제 이름은 ${myName}입니다.`);

// 문제16 : 로꾸거

const newWord = window.prompt("입력하세요");
let tempWord = Array.from(newWord);
let reWord = "";
for(let i = 0; i< tempWord.length; i++){
  reWord += tempWord[tempWord.length - i -1];
}
console.log(reWord);

//문자열인 newWord도 newWord[1]의 사용이 가능하나 Array.from으로 배열로 바꿔 for문으로 뒤집어 줍니다