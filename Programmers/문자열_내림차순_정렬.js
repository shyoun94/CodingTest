function solution(s) {
  var answer = "";
  let temp = s.split("");
  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].charCodeAt();
  }
  temp = temp.sort((a, b) => b - a);
  for (let i = 0; i < temp.length; i++) {
    temp[i] = String.fromCharCode(temp[i]);
  }

  return (answer = temp.join(""));
}
