function solution(s){
  var answer = 0;
  let stack = [];
  for(let i=0; i<s.length; i++){
      if(!stack.length || stack[stack.length-1] !== s[i]) stack.push(s[i])
      else stack.pop()
  }
  if(stack.length === 0){
      answer = 1;
  }else{
      answer = 0;
  }
  
  return answer;
}
//스택을 이용해 스택에 담긴 것과 담을 것이 같다면 스택에서 제거