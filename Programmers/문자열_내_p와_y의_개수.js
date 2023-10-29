function solution(s){
  var answer = true;
  let temp = "";
  let p = 0;
  let y = 0;
  temp = s.toUpperCase()
  for(let i = 0; i<temp.length; i++){
     if(temp[i] === "P"){
      p++
     }else if(temp[i] === "Y"){
         y++;
     }
  }
  if(p === y ||( p === 0 && y === 0)){
      answer = true
  }else{
      answer = false
  }
  return answer;
}