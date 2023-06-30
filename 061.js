// # 문제61 : 문자열 압축하기

// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

const input = "aaabbbbcdddd";

function howMany(input) {
  let result = "";
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    count++;

    if (input[i] !== input[i + 1]) {
      result += input[i] + count.toString();
      count = 0; // 카운트 리셋
    }
  }
  
  console.log(result);
}

howMany(input);