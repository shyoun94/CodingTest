// 문제39 : 오타수정
// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

// const text = prompt("문장을 입력하세요 영어로");
// const text = "hqllo my namq is hyqwon qqqqqqqqqqqqqqqqq";
// console.log(text);

// let newText = text.replaceAll(/q/g, 'e');

// console.log(newText);

// 문제40 : 놀이동산에 가자
// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

// const totalWeight = parseInt(prompt("제한 무게를 입력해주세요"));
const totalWeight = 100;
let tWeight = 0;
if(totalWeight){
  // const headCount = parseInt(prompt("친구들의 수를 입력하세요"));
  const headCount = 5;
  if(headCount){
    // const weight = prompt("함께한 친구들의 몸무게를 입력하세요").split(" ");
    const weight = [20,40,60,40,20]; // [0 1 2 3 4]
    console.log(weight);
    if(weight.length === headCount){
      
      for(let i = 0 ; i < weight.length; i++){
        tWeight += parseInt(weight[i]);
        // console.log(tWeight, totalWeight);
        if(tWeight > totalWeight){
          console.log(`해당 놀이기구에 탈 수 있는 정원은 ${i}명 입니다.`);
          break;
        }else if(tWeight === totalWeight){
          console.log(`해당 놀이기구에 탈 수 있는 정원은 ${i+1}명 입니다.`);
          break;
      }
    }
    }else{
      console.error("친구 수와 몸무게가 일치하지 않습니다.");
    }
  }else{
    console.error("친구수가 입력되지 않았습니다.");
  }
}else{
  console.error("뭐 잊은거 없수?")
}

// 입력이 하나라도 오류가 있거나 입력이 안되면 error 출력
// for문 돌고 각 index를 더한 후 제한 무게와 비교해서 크면 i 출력
// 만약 딱 떨어지는 경우엔 +1을 해줌 (i는 0부터 시작되기 때문에)
// 해당 if와 else if를 수행하면 break를 통해 for문 탈출


const warning = "hqllo my namq is seula🌿";
console.log(warning.split("q").join("e"));
