function solution(n) {
  var answer = 0;
  let temp = 0;
  let plusTemp = n.toString();
  if(plusTemp[plusTemp.length] !== "2" || plusTemp[plusTemp.length] !== "3" || plusTemp[plusTemp.length] !== "7" || plusTemp[plusTemp.length] !== "8"){
  temp = Math.sqrt(n)
  }
  else{
      answer = -1;
  }
  if(parseInt(temp) === temp){
      answer = (temp+1)*(temp+1)
  }else{
      answer = -1
  }
  return answer;
}