// 문제47 : set 자료형의 응용
// const people = {
//   이호준: "01050442903",
//   이호상: "01051442904",
//   이준호: "01050342904",
//   이호준: "01050442903",
//   이준: "01050412904",
//   이호: "01050443904",
//   이호준: "01050442903"
// };
// const newPeople = new Set(); 

// for(let index in people){
//   newPeople.add(people[index]);
// }
// console.log(newPeople.size);
//set의 경우에는 키 값이 없기 때문에 size로 크기를 가져와야 한다.

// 문제48 : 대소문자 바꿔서 출력하기

const strInput = "AAABBBcccddd";
let result = "";
for(let index in strInput){
  if(strInput[index] == strInput[index].toUpperCase()){
    result += strInput[index].toLowerCase();
  }else{
    result += strInput[index].toUpperCase();
  }
}
console.log(result);

// 문제49 : 최댓값 구하기
let inputSet = new Set();
while (inputSet.size < 10) {
  inputSet.add(Math.floor(Math.random()*100 + 1));
}
let input = Array.from(inputSet).join(" ");
console.log(input);
// 무작위 숫자 10개 공백으로 주어지는 조건
let inputArr = input.split(' ').map(Number);
inputArr.sort((a,b)=> a-b);
console.log(inputArr);
console.log(inputArr.pop());
//제일 마지막에 큰수를 배치해서 가장 큰 수 뽑아내기
// 문제50 : 버블정렬 구현하기
function bubble(arr) {
  let result = arr.slice(); 

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        // 1번방법
        // [result[j], result[j+1]] = [result[j+1], result[j]];
        // 기본적인 골격 (다른 언어 사용가능)
        let temp = 0;
        temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
        //
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));
//Bubble Sort => 인접한 요소 두개를 비교해서 앞의 요소가 뒤의 요소보다 크다면 자리 바꾸는 방법
//Selection Sort => 주어진 배열에서 최솟값을 선택하여 정렬 순서에 맞게 위치를 교환하는 방식으로 정렬을 수행합니다.
//Insertion Sort => 배열을 정렬된 부분과 정렬되지 않은 부분으로 나누고, 정렬되지 않은 요소를 정렬된 부분에 삽입하여 정렬을 수행합니다.
//Quick Sort => 배열을 피벗(pivot)을 기준으로 두 개의 하위 배열로 분할하고, 분할된 하위 배열을 재귀적으로 정렬