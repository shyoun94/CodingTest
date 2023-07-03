// 문제43 : 10진수를 2진수로

const number = parseInt(prompt("숫자를 입력해주세요"));
// const number = 15;
let binary = 0;
if(isNaN(number)||!isFinite(number)){
  console.log("error");
}else{
  binary = number.toString(2)
  console.log(binary);
}
// 2진수
// 2^3, 2^2, 2, 1

// # 문제44 : 각 자리수의 합
// **사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요

const number1 = parseInt(prompt("숫자를 입력해주세요"));
// const number1 = 7520;  = 10^3 10^2 10 1
let sum = 0;
if(isNaN(number1)||!isFinite(number1)){
  console.log("error");
}else{
  let num = number1; // number1의 값을 보존하기 위해
  while (num > 0) {
    sum += num % 10;
    // 7520 / 10 => 752 + 0
    // 752 / 10 => 75 + 2 + 0
    // 75/ 10 => 7 + 5 + 2 + 0
    // 7 / 10 => 0 + 
    num = Math.floor(num / 10);
  }
}
console.log(sum);

// # 문제45 : getTime()함수 사용하기
// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
// 이를 이용하여 **현재 연도(2019)를 출력해보세요.**

const time = new Date();
let year = time.getTime();
year = Math.floor(year/(3600*24*365*1000))+1970;
// 365.25를 사용 하는 것도 고려 (윤년)
console.log(year);

// # 문제46 : 각 자리수의 합 2
// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.
let sum1 = 0;
let strNum = "";
for(let i = 0; i <= 20; i++){
  strNum += i.toString();
}
for(let item of strNum){
  sum1 += parseInt(item);
}
console.log(sum1);