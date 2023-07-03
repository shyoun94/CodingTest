// 문제41 : 소수판별
// const number = parseInt(prompt("소수를 입력하세요"));

function isPrime(number){
  if(isNaN(number)||!isFinite(number)){
    console.log("error");
  }
  else if(number<=3 && number > 1){
    return "YES!";
  }
  else if(number % 2 === 0 || number % 3 === 0  || number === 1){
    return "NO!"
  }
  let sqrtNumber = Math.sqrt(number); 
  for(let i = 5;  i <= sqrtNumber; i += 6){ 
    console.log(i);
    if(number % i === 0 || number %(i+2) === 0){
      return "NO!"
    }     
  }
  return "YES!"
} 
console.log(isPrime(503));
      
//Trial Division을 이용한 방식
//반복문의 시작 값은 5이며, 6씩 증가. 이렇게 되면 반복문에서 검사하는 수는 '6k - 1'의 형태. 그리고 해당 숫자와 '6k + 1' 형태의 숫자로 나누어보고 나누어떨어지는지 확인.

// # 문제42 : 2020년

// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// **제한 조건**
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다. 
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

// const a = parseInt(prompt("숫자를 입력하세요 (1~12)"));
// const date = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

// function calDate(a){
// if(isNaN(a)||!isFinite(a)){
//   alert("ERROR");
// }else if(a === 2){
//   // const b = parseInt(prompt("숫자를 입력하세요 (1~28or29)"));
//   const b = 10;
//   const when = new Date('2020-'+a+'-'+b);
//   if((a-1) !== when.getMonth()){
//     console.log("해당 월에는 해당 일이 없습니다.");
//     return null;
//   }else{
//     return { day: date[when.getDay()], date: b }; 
// }
// }else{
//   const b = parseInt(prompt("숫자를 입력하세요 (1~30or31)"));
//   const when = new Date('2020-'+a+'-'+b);
//   if((a-1) !== when.getMonth()){
//     console.log("해당 월에는 해당 일이 없습니다.");
//     return null;
//   }else{
//     return { day: date[when.getDay()], date: b };
// }
// }
// }
// const result = calDate(2);
// if (result !== null) {
//   console.log(`${a}월 ${result.date}일은 ${result.day}입니다.`);
// }
// 월 입력 후, 문제가 없다면 일을 입력 이때 월의 입력에 따라 월의 출력과 최대값을 조절
// 만약 6 31을 입력시 date에서 다음달로 넘겨버리기 때문에 그 부분을 비교해서 달이 다를시에 오류 메세지 출력