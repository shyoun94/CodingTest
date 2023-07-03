// 문제54 : 연속되는 수

// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

const number = "1 2 4 5 6 7 3".split(" ");

function problem(number){
  const newNumber = number.sort((a,b) => a-b);

  const target = +newNumber[0];
  for(let i = 0; i < newNumber.length; i++){
    console.log( newNumber[i], (target + i))
    if(+newNumber[i] !== target + i){
      return 'No';
    }
  }
  return 'Yes';
}

console.log(problem(number));