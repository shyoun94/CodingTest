// 문제:
// 배달 음식 주문 시, 주문한 음식들을 최적의 순서로 배치하는 문제입니다. 
// 장미반점은 손님에게 어떤 음식을 가장 빠르게 배달할 수 있는지 알려드릴 수 있는 서비스를 고심중입니다.
// 각 음식은 조리 시간과 목적지에 따른 배달 시간을 가지고 있습니다. 
// 각 음식은 조리 시간과 배달 시간을 합친 총 시간이 가장 짧은 순서에서 가장 긴 순서까지 오름차순으로 배치되어야 합니다. 
// 이를 위해 음식 배치 순서를 결정하는 알고리즘을 구현해보세요.

// const deliveryTime = parseInt(prompt('배달시간을 입력하세요'));
const deliveryTime = parseInt("10분");
const jangmiMenu = {
  "짜장면": "10분",
  "짬뽕": "15분",
  "탕수육": "15분",
  "군만두": "5분",
  "고추잡채": "20분",
};

let totalTime = [];

Object.keys(jangmiMenu).forEach((menu) => {
  const menuTotalTime = deliveryTime + parseInt(jangmiMenu[menu]);
  totalTime.push({ menu, totalTime: menuTotalTime });
});
console.log(totalTime);

//버블정렬
function bubbleSort(time) {
  let bubbleTime = time.slice();

  for (let i = 0; i < bubbleTime.length - 1; i++) {
    for (let j = 0; j < bubbleTime.length - i - 1; j++) {
      if (bubbleTime[j].totalTime > bubbleTime[j + 1].totalTime) {
        [bubbleTime[j], bubbleTime[j + 1]] = [bubbleTime[j + 1], bubbleTime[j]];
      }
    }
  }

  return bubbleTime;
}
//선택정렬
function selection(time) {
  let selectionResult = time.slice(); 
  
  for (let i = 0; i < selectionResult.length; i++) {
    minIndex = i;
    for(let j = i+1; j <selectionResult.length; j++){
      if(selectionResult[j] < selectionResult[minIndex]){
        minIndex = j;
      }
    }
    let temp = 0;
        temp = selectionResult[i];
        selectionResult[i] = selectionResult[minIndex];
        selectionResult[minIndex] = temp;
  }
  return selectionResult;
}

//삽입정렬
function insertion(time) {
  let insertionResult = time.slice();
  for (let i = 1; i < insertionResult.length; i++) {
    let key = insertionResult[i];
    let j = i - 1;

    while (j >= 0 && insertionResult[j] > key) {
      insertionResult[j + 1] = insertionResult[j];
      j = j - 1;
    }

    insertionResult[j + 1] = key;
  }

  return insertionResult;
}

const sortedTotalTime = bubbleSort(totalTime);
// const sortedTotalTime = selection(totalTime);
// const sortedTotalTime = insertion(totalTime);
const sortedMenuKeys = sortedTotalTime.map((item) => item.menu);

console.log(sortedMenuKeys);


let arr=[{"test2":1, "test2":2}]

console.log(typeof(arr.test2))