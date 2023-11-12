function solution(n) {
  var answer = "";
  answer = "수";
  for (let i = 1; i < n; i++) {
    if (answer[i - 1] === "수") {
      answer += "박";
    } else {
      answer += "수";
    }
  }
  return answer;
}
