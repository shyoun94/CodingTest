function solution(n, k) {
  var answer = 0;
  let convertNum = n.toString(k)
  let temp = []
  let str = ""
  for(let i=0; i<convertNum.length; i++){
      if(convertNum[i] !== "0"){
          str += convertNum[i];
      } else {
          if(str !== "") {
              temp.push(str);
              str = "";
          }
      }
  }
    if(str !== "") {
      temp.push(str);
  }
  //조건에 맞는 숫자 배열에 저장
  function check(num){
  num = Number(num);
  if(num === 1){
      return;
  }
  if(num === 2 || num === 3){
      answer++;
  }else{
      for(let i=2; i<=Math.sqrt(num); i++){
          if(num % i === 0){
              return;
          }
      }
      answer++;
      }
  }
  for(let item of temp){
      check(item)
  }
  //각 숫자를 함수를 이용해 10진수 일 때, 소수인지 판별
  return answer;
}