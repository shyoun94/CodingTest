function solution(n) {
  var answer = 0;
  let temp1 = 0;
  let temp2 = 1;
  
  for(let i=2; i<=n; i++){
      answer = ((temp1%1234567) + (temp2%1234567))%1234567
      temp1 = temp2
      temp2 = answer
  }
  return answer ;
}

//가장 기본적인 피보나치 수열 구현