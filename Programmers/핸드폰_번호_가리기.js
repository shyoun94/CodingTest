function solution(phone_number) {
  var answer = "";
  const temp = phone_number.split("");
  for (let i = temp.length - 5; i >= 0; i--) {
    temp[i] = "*";
  }
  return (answer = temp.join(""));
}
