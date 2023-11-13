function solution(left, right) {
  var answer = 0;
  let count = 0;
  for (let i = left; i <= right; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    console.log(count);
    if (count % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}
