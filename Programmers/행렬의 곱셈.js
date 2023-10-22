function solution(arr1, arr2) {
  var answer = [[]];
  for(let i=0; i<arr1.length; i++){
      answer[i] = []; 
      for(let j=0; j<arr2[0].length; j++){
          let sum = 0; 
          for(let k=0; k<arr1[0].length; k++){
              sum += arr1[i][k] * arr2[k][j];
          }
          answer[i][j] = sum; 
      }
  }
  return answer;
}
//3중for문을 사용해 행렬의 곱을 구현