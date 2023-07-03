
//5. for문 다음 console에 찍히는 값은?
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);
//16
//풀이: i === 1 => a = 10 + 1 
//      i === 3 => a = 11 + 3 (for문 탈출)
//      console.log(14 + 2)   

// 6. 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

//답 : 2 (1은 true로 찍힘)

// 7. 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

// 1)  age
// 2)  Age
// 3)  let
// 4)  _age
// 5)  1age

//답 : 3 , 5 (변수는 숫자로 시작 할 수 없으며 let 역시 JS 예약어라 불가)

//8. 객체 이름의 키 중복
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

//답 84 (하위 우선)