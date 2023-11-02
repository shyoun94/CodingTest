function solution(x) {
  var answer = true;
  let temp = x.toString();
  let sum = 0;
  
  for(let i=0; i<temp.length; i++){
      sum += parseInt(temp[i]);  
  }
  console.log(sum)
  if(x%sum === 0){
      answer = true;
  }else{
      answer = false
  }
  return answer;
}