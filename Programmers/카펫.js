function solution(brown, yellow) {
  var answer = [];
  let temp = [];
  const total = brown + yellow;
  
  for(let i=0; i<total/2; i++){
      if(total % i === 0 && total/i >= i){
          temp.push([total/i, i])
      }
  }
  console.log(temp)
  for(let i=0; i<temp.length; i++){
      if(((temp[i][0]-2) * (temp[i][1]-2)) === yellow){
          answer = temp[i]
      }
  }
  return answer;
}
// 갈색과 노란색 타일의 연관성을 찾아 계산
// 항상 가로가 길기 때문에 노랑은 전체 가로보다 2개 적다