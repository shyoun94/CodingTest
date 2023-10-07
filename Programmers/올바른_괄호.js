function solution(s){
  var answer = true;
  let temp = 0;
  if(s[0] === ")" || s[s.length-1] === "("){
      answer = false;
  }else{
      for(let i=0; i<s.length; i++){
          if(s[i] === "("){
              temp++
          }
          else{
              temp--
              if(temp < 0){
              answer = false
                  break
          }
          }
          
      }
      if(temp === 0){
          answer = true;
      }else{
          answer = false
      }
  }
  return answer;
}
//한 종류의 괄호 문제라 스택이 아닌 경우의 수로 푼 문제
//스택으로 풀었어도 좋았을 문제