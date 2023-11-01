function solution(n) {
  var answer = 0;
  const temp = n.toString().split("");
  let result = []
  result = temp.sort((a,b)=>b-a)
  return parseInt(result.join(""));
}