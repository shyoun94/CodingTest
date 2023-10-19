function solution(s) {
  var answer = 0;

  function valid(s){
      let stack = [];
      let remain = [];
      for(let i=0; i<s.length; i++){
          if(s[i] === "(" || s[i] === "{" || s[i] === "["){
              stack.push(s[i])
          }else{
              if(stack.length === 0){
                  remain.push(s[i])
              }
              if(stack[stack.length-1] === "(" && s[i] === ")"){
                  stack.pop();
              }else if(stack[stack.length-1] === "{" && s[i] === "}"){
                  stack.pop();
              }else if(stack[stack.length-1] === "[" && s[i] === "]"){
                  stack.pop();
              }
          }
      }
      if(stack.length === 0 && remain.length === 0){
          return 1;
      }else{
          return 0;
      }
  }

  for(let i=0; i<s.length; i++){
      const changedS = [...s.slice(i,s.length), ...s.slice(0,i)];
      answer += valid(changedS);
  }
  return answer;
}
//stack을 이용해 괄호 validation을 진행
//회전은 slice를 통해 구현