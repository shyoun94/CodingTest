function solution(want, number, discount) {
  var answer = 0;
  let hash = {};
  for(let i=0; i<want.length; i++){
      hash[want[i]] = number[i];
  }

  for(let i=0; i<discount.length-9; i++){
      let temp_hash = {...hash};
      let valid = true;
      for(let j=i; j<i+10; j++){
          if(temp_hash[discount[j]] === undefined || temp_hash[discount[j]] === 0){
              valid = false;
              break;
          }else{
              temp_hash[discount[j]]--;
          }
      }
      if(valid && Object.values(temp_hash).every(val => val === 0)){
          answer++;
      }
  }

  return answer;
}

//hash를 이용해 물건을 정리한 후 for문을 돌면서 구현