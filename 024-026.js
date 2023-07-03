// # 문제24 : 대문자로 바꿔주세요!

// 민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.

// 민지를 위해 **이름이 입력되면 전부 대문자로 출력되는 프로그램**을 만들어주세요.

const myName = prompt("이름을 입력해주세요");
//sunho youn
let ascii = [];
let newAscii = [];
let newName = [];
for(let index of myName){
  ascii.push(index.charCodeAt());
  
}
for(let i = 0; i < ascii.length; i++){
  if(ascii[i]>=97){
    newAscii[i] = ascii[i] - 32;
  }
  else{
    newAscii[i] = ascii[i];
    continue;
  }
}
for(let index of newAscii){
  newName.push(String.fromCodePoint(index));
}
console.log(newName.join(''));

//# 문제25 : 원의 넓이를 구하세요

// 원의 넓이는 `반지름의 길이 x 반지름의 길이 x 3.14`로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// **입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수**를 만들어 주세요.

const radius = Number(prompt("반지름을 입력하세요"));

const circleArea = radius * radius * 3.14;
console.log(circleArea);

const circleArea1 = Math.PI * radius * radius;
console.log(circleArea1);

//Math.PI = 3.141592~~~

//# 문제26 : 행성 문제2

// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// **행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.

const planet = prompt("행성을 입력하세요");
const kPlanets = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
const ePlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
console.log(ePlanets[kPlanets.indexOf(planet)]);

// if(planet == "수성"){
//   console.log("Mercury");
// }
// else if(planet == "금성"){
//   console.log("Venus");
// }
// else if(planet == "지구"){
//   console.log("Earth");
// }
// else if(planet == "화성"){
//   console.log("Mars");
// }
// else if(planet == "목성"){
//   console.log("Jupiter");
// }
// else if(planet == "토성"){
//   console.log("Saturn");
// }
// else if(planet == "천왕성"){
//   console.log("Uranus");
// }
// else if(planet == "해왕성"){
//   console.log("Neptune");
// }
// else{
//   console.error("행성이 아닙니다.");
// }

