function solution (n) {
    
  const dp = new Array(n+1).fill(0);
  dp[0] = 1; dp[1] = 1;
  
  for(let i = 2; i <= n; i++)
    dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
  
  return dp[n];
}
//피보나치 수열을 응용한 문제로 앞 단계와의 연관성을 파악해야함