function solution(n, left, right) {
  const answer = [];
  for(let i = left; i <= right; i++){
      answer.push(Math.max(Math.floor(i/n), i%n) + 1);
  }
  return answer;
}
//원래 이중 for문을 사용해 구현 했으나 시간초과로 인해 구현 방법을 변경
