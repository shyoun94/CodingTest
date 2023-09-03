// # 문제70 : 행렬 곱하기

// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.


function solution(a, b) {
  let c = [];
  const len = a[0].length;

  if (len === b.length){
      for(let i=0; i<len; i++){
          let row = [];
          for(let j=0; j<len; j++){
              let x = 0;
              for(let k=0; k<len; k++){
                  x += a[i][k]*b[k][j];
              }
              row.push(x);
          }
          c.push(row);
      }
      return c;
  } else {
      return -1;
  }
}

const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];

console.log(solution(a, b));