function solution(n) {
  var answer = 0;
  function isPrime(num) {
      if (num <= 1) return false;
      if (num === 2) return true; 
      if (num % 2 === 0) return false; 
      let sqrt = Math.sqrt(num);
      for(let i = 3; i <= sqrt; i += 2) {
          if (num % i === 0)
              return false;
      }
      return true;
  }
  for(let i=0; i<=n; i++){
      if(isPrime(i)) answer++
  }
  return answer;
}
//소수 찾기 알고리즘
//math.sqrt를 사용한 이유
// 전체를 다 계산하면 시간복잡도가 올라가기에
// 제곱근까지만을 계산