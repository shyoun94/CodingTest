// # 문제59 : 빈칸채우기

// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

const inputStr = prompt("입력하세요");

let limitedInputStr = inputStr.slice(0, 50); // 최대 길이 제한

let halfArr = '';
let strLength = 50 - limitedInputStr.length;
if(strLength < 0) {
  strLength = 0;
}

for(let i = 0; i < parseInt(strLength/2); i++){
  halfArr += '=';
}

let result = halfArr + inputStr + halfArr;

if (result.length > 50)  result = result.slice(0, 50);


if (result.length < 50) {
  while (result.length < 50) {
    result += '=';
  }
}

console.log(result, result.length);
