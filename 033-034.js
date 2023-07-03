// # 문제33 : 거꾸로 출력하기

// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

const number = prompt("숫자를 입력하세요").split('');
console.log(number);

const newNumber = number.filter(item => item.trim() !== '');
//trim() => 좌우 공백을 없애줌
//item => item.trim() !== '' => 배열안에 요소의 좌우 공백을 없애고 빈 요소가 아니면 요소로 저장함

console.log(newNumber.reverse());

//1. 숫자를 받을 때 띄어쓰기를 구분해야하나 -> 둘 다 상관 없이 받고 split('')으로 배열로 받은 후 filter(trim())을 이용해서 공벡 요소를 제거

// # 문제34 : sort 구현하기

// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

const height = prompt("학생들의 키를 입력하세요").split(' ');
let sorted = true;
for(let i = 0; i< height.length; i++){
  if(height[i] > height[i+1]){
    sorted = false;
    break;
  }
}
if(sorted){
  console.log("YES!");
}
else{
  console.log("NO!");
}
//하나하나 비교하는 방법

const newHeight = height.slice().sort((a,b) => a-b);

(newHeight == height) ? console.log("YES!") : console.log("NO!");

//정렬 후, 배열끼리 비교 
//sort는 원본을 정렬하기 때문에, slice()잘라내는 것 없이 원본을 복사 한 후 정렬해서 newHeight는 정렬된 배열이 됨


// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let answer = 0;
  let temp = '';
  for(let index of my_string){
    if (48 <= index.charCodeAt() && index.charCodeAt() <= 57) {
      temp += index;
    } else {
      temp += ' ';
    }
  }
  return temp.split(' ').reduce((acc, cur) => {
    if (cur.length > 0) {
      answer = acc + parseInt(cur, 10);
    }
    return answer;
  }, 0);
}

const my_string = "aAb1B2cC34oOp";
console.log(solution(my_string)); // "1 2 3 4"

