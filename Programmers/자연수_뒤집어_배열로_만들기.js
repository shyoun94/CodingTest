function solution(n) {
  var answer = [];
  let tempN = n.toString();
  for(let i=tempN.length-1; i>=0; i--){
      answer.push(parseInt(tempN[i]))
  }
  return answer;
}