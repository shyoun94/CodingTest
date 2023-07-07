// 문자열 나누기
// 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
// 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
// s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
// 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.

const word = "abracadabra";

function solution(s) {
  let arr = [];
  let a = 0;
  let b = 0;

  while (s.length > 0) {
      let count = 0;
      for (let i = 0; i < s.length; i++) {
          if(s[0] === s[i]){
            a += 1;
          }else{ 
            b += 1;
          };
          if (a === b) {
              count = i + 1;
              break;
          }
      }
      arr.push(s.slice(0, count));
      s = s.slice(count);
      if(count === 0) break;
  }
  return arr.length;
}

console.log(solution(word));