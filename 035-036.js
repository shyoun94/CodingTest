// # 문제35 : Factory 함수 사용하기

// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 

// <pass>에 코드를 작성하여 two함수를 완성하세요.

function one(n){
  function two(num){ //(a(10)에서 10 (value)가 들어가야함)
      return Math.pow(num,n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10)); //1. a(10)=> one(2(10))
console.log(b(10));
console.log(c(10));

// # 문제36 : 구구단 출력하기

// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

const number = parseInt(prompt("숫자를 입력하세요 (2~9)"));
let result ="";
for(let i =1; i< 10; i++){
  result += (number*i + " "); //결과를 보기 쉽게 하기 위해 공백으로 분리
}
console.log(result);

// +a) 구구단 전체
for(let i = 2; i < 10; i++){
  for(let j = 1; j < 10 ; j++){
    console.log(`${i} X ${j} = ${i*j}`);
  }
}