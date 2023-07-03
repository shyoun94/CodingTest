//9번 concat을 이용한 출력

// 데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

//빈칸을 채워주세요

var result = year.concat("/", month, "/", day, " ", hour, ":", minute ,":", second) 

console.log(result);


// 출력
// 2019/04/26 11:34:27

//10번 트리 만들기

const num = prompt("숫자를 입력하세요");
let tree = '';
console.log(num);

for(let i = 1 ; i <= num ; i++){
    let star = '';
  for(let j = 1 ; j <= num - i ; j++){
    star += ' '; // '/'넣으면 중간과정 확인가능
  }
  for(let k = 1 ; k <= 2*i-1 ; k++){
    star += '*';
  }
  tree += star + '\n';  
}

console.log(tree);

//입력 받은 num 만큼 for(i)가 층 개념의 빈 문자열을 만들고 
//for(j)에서 빈 문자열로 별보다 먼저 찍어 별을 가운데 배치 -> 별의 오른쪽은 찍을 필요 없음
//for(k)에서 *을 찍는데 홀수 이면서 2개씩 늘어남으로  2*i(층수)-1 만큼 반복
//k까지 한줄이 끝나면 줄 바꿈

//역순
const num1 = prompt("숫자를 입력하세요");
let tree1 = '';
console.log(num1);

for(let i = num1 ; i >= 1  ; i--){
    let star = '';
  for(let j = num1 - i ; j >= 1 ; j--){
    star += ' '; // '/'넣으면 중간과정 확인가능
  }
  for(let k = 2*i-1 ; k >= 1 ; k--){
    star += '*';
  }
  tree1 += star + '\n';  
}

console.log(tree1);

//+a
const num2 = prompt("숫자를 입력하세요");
let tree2 = '';
console.log(num2);

for(let i = 1 ; i <= num2 ; i++){
    let star = '';
  for(let j = 1 ; j <= num2 - i ; j++){
    star += '☆'; // '/'넣으면 중간과정 확인가능
  }
  for(let k = 1 ; k <= 2*i-1 ; k++){
    star += '★';
  }
  for(let j = 1 ; j <= num2 - i ; j++){
    star += '☆'; // '/'넣으면 중간과정 확인가능
  }
  tree2 += star + '\n';  
}

console.log(tree2);