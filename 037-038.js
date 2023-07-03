// # 문제37 : 반장 선거

// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.


//풀이
//1. 입력 배열을 중복제거
//2. 입력 배열에 나온 학생과 중복제거 후 배열의 학생을 비교해 카운트 해서 객체로 저장
//3. 객체 순회 돌면서 가장 큰 value 뽑아내기
//4. 출력

const votes = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
let candidate = [];
let result = {};
candidate = new Set(votes);
console.log(candidate);

for(let index of candidate){
  let count = 0;
  for(let person of votes){
    if(index === person){
      count++;
    }
  }
  result[index] = count;
  console.log(result)
}
let maxKey = "";
let maxVal = 0;

for (let key in result){
  if(result[key] > maxVal) {
    maxKey = key;
    maxVal = result[key];
  }
}
console.log(`${maxKey}이(가) ${maxVal}표로 당선되었습니다. `);

// # 문제38 : 호준이의 아르바이트

// 호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// **학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**
// 입출력

// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

//풀이
//1. 중복 제거 => 상위 점수 3위 까지 뽑기
//2. 해당 점수와 같은 배열의 요소가 있다면 카운트 증가

const englishGrade = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

let grade = [];
let count = 0;
grade = Array.from(new Set (englishGrade));

grade.sort((a,b) => b-a); //내림차순
console.log(grade);

for(let i = 0 ; i < 3; i++){
  for(let index of englishGrade){
    if(index === grade[i]){  //englishGrade에 grade[i] index가 있다면 + 1
      count++;
      console.log(index, count);
    }
  }
}
console.log(`1위부터 3위 점수를 받은 학생의 수는 ${count}명 입니다.`);