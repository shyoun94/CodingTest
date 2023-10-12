function solution(n, words) {
  var answer = [0,0];
  const stack = [];
  
  for(let i=0; i< words.length; i++){
      if(stack.length === 0){
          stack.push(words[i])
      }else{
          if(stack[stack.length-1][stack[stack.length-1].length-1] !== words[i][0]){
              answer = [i % n + 1, Math.floor((i) / n) + 1]
              break;
          }else if(stack.indexOf(words[i]) !== -1){
              answer = [i % n + 1, Math.floor((i) / n) + 1]
              break
          }else{
              stack.push(words[i])
          }
      }
  }

  return answer;
}

//스택을 이용해 끝말잇기 규칙을 적용하고
// 나온 idx를 계산해서 몇번째 사람이 몇번째에서 실패 했는지 체크