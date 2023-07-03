// 문제57 : 1의 개수

//주어진 조건: 1~ 20까지의 수는 12개로 11의 경우 2개로 친다.

//0부터 1000까지의 1의 개수
let count = 0;
for(let i = 0; i <= 1000; i++){
  let tempNum = i.toString();
  for(let j = 0; j< tempNum.length; j++){
    if(tempNum[j] === '1'){
      count++;
    }
  }
}
  console.log(count);