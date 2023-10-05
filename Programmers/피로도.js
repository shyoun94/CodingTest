function solution(k, dungeons) {
  var answer = 0;
  let temp = []
  function permute(arr, m = []) {
      if (arr.length === 0) {
          temp.push(m)
      } else {
          for (let i = 0; i < arr.length; i++) {
              let curr = arr.slice();
              let next = curr.splice(i, 1);
              permute(curr.slice(), m.concat(next))
          }
      }
  }
  permute(dungeons)
  //완전 탐색을 위한 던전 배열 순열 정리 함수(재귀)

  for(let i=0; i<temp.length; i++){
      let flag = true;
      let currentK = k;
      let count = 0;
      for(let j=0; j<temp[i].length; j++){
          if(currentK >= temp[i][j][0]){
              currentK = currentK-temp[i][j][1];
              count++;
          }else{
              flag = false;
              answer = Math.max(answer, count);
              break;
          }
      }
      if(flag){
          answer = Math.max(answer, temp[i].length);
      }
  }
  return answer;
}
// 만들어진 순열 배열을 통해 피로도를 구현