function solution(numbers) {
  var answer = 0;
  let sumN = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  answer = 45 - answer;
  return answer;
}
