// 문제17 : 놀이기구 키 제한 (150cm 이상)

const myHeigth = prompt("키를 입력하세요");

if(myHeigth >= 150){
  console.log("Yes");
}
else{
  console.log("No");
}

// 문제18 : 평균 점수

const grade = prompt("점수를 입력하세요.").split(" ");
console.log(grade);
console.log(`입력하신 점수는 ${grade}입니다.`);
const newGrade = grade.map(x => parseInt(x));
const average = newGrade.reduce((acc, cur, i, {length})=>{
  return i === (length - 1) ? (acc+cur)/length : acc+cur;
}, 0);

console.log(`평균은 ${average}입니다.`);

// 문제19 : 제곱을 구하자 (a**b)

const number = prompt("숫자 두개를 입력하세요.(띄어쓰기로)").split(" ");
if(number.length == 2){
  const newNumber = number.map(x => parseInt(x));

  function calculateSquare(newNumber){
    const square = newNumber[0] ** newNumber[1];
    return square;
  }
  console.log(calculateSquare(newNumber));
}
else{
  console.error("숫자가 너무 많습니다.");
}


// 문제20 : 몫과 나머지

const number1 = prompt("숫자 두개를 입력하세요.(띄어쓰기로)").split(" ");

if(number1.length == 2){
const newNumber1 = number1.map(x => parseInt(x));

function divide(newNumber1){
  const share = Math.floor(newNumber1[0] / newNumber1[1]);
  const remainder = newNumber1[0] % newNumber1[1];

  console.log(`입력: ${newNumber1[0]} / ${newNumber1[1]}`);
  console.log(`출력: 몫: ${share} / 나머지: ${remainder}`);
}
divide(newNumber1);
}
else{
  console.error("숫자가 너무 많습니다.");
}
// '/'연산의 경우 소수점이 생기니 내림을 해서 버려줘야 한다.