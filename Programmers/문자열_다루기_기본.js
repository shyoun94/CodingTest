function solution(s) {
  var answer = true;
  const regex = /[a-zA-Z]/g;
  if (s.length === 4 || s.length === 6) {
    if (regex.test(s)) {
      answer = false;
    } else {
      answer = true;
    }
  } else {
    answer = false;
  }
  return answer;
}
