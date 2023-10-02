function solution(id_list, report, k) {
  var answer = [];
  const result = {};
  const temp = [];
  const human = [];
  for(let id of id_list){
      result[id] = [0,0]
  }
  const reportSet = new Set(report);  
  for(let item of reportSet){
      temp.push(item.split(" "))
  }
  for(let i=0; i<temp.length; i++){
      result[temp[i][1]][0] += 1;
  }
  for(let a in result){
      if(result[a][0] >= k){
          human.push(a)
      }
  }

  for(let i=0; i<temp.length; i++){
      for(let j=0; j<human.length; j++){
          if(temp[i][1] === human[j]){
              result[temp[i][0]][1] += 1;
          }
      }
  }
  for(let i in result){
      answer.push(result[i][1])
  }
  console.log(result, human)
  return answer;
}

//객체 형태로 사용자를 key로 [신고 받은 횟수, 신고 한 횟수] 로 정리 후 신고 한 횟수를 return