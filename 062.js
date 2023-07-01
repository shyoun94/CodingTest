// # 문제62 : 20190923출력하기

// `20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.


const input = "aaabccddddddddddeffffffffffggghhhh";

function howMany(input) {
  let result = "";
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    count++;

    if (input[i] !== input[i + 1]) {
      result += (count.toString()-1);
      count = 0; // 카운트 리셋
    }
  }
  
  console.log(result);
}

howMany(input);