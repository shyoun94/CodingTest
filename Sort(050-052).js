//Bubble Sort => 인접한 요소 두개를 비교해서 앞의 요소가 뒤의 요소보다 크다면 자리 바꾸는 방법

function bubble(arr) {
  let result = arr.slice(); 

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        // 1번방법
        // [result[j], result[j+1]] = [result[j+1], result[j]];
        // 기본적인 골격 (다른 언어 사용가능)
        let temp = 0;
        temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
        console.log(i, j, result);
        //
      }
    }
  }
  return result;
}

//Selection Sort => 주어진 배열에서 최솟값을 선택하여 정렬 순서에 맞게 위치를 교환하는 방식으로 정렬을 수행합니다.

function selection(arr) {
  let selectionResult = arr.slice(); 
  
  for (let i = 0; i < selectionResult.length; i++) {
    minIndex = i;
    for(let j = i+1; j <selectionResult.length; j++){
      if(selectionResult[j] < selectionResult[minIndex]){
        minIndex = j;
        console.log(`최소값인 ${selectionResult[minIndex]} 의 index는 ${minIndex} 입니다`);
        //원 배열에서 최소값을 찾기
      }
    }
    let temp = 0;
        temp = selectionResult[i];
        selectionResult[i] = selectionResult[minIndex];
        selectionResult[minIndex] = temp;
  }
  return selectionResult;
}

//Insertion Sort => 배열을 정렬된 부분과 정렬되지 않은 부분으로 나누고, 정렬되지 않은 요소를 정렬된 부분에 삽입하여 정렬을 수행합니다.

function insertion(arr) {
  let insertionResult = arr.slice();
  for (let i = 1; i < insertionResult.length; i++) {
    let key = insertionResult[i];
    let j = i - 1;

    // key보다 큰 요소를 오른쪽으로 이동시킵니다.
    while (j >= 0 && insertionResult[j] > key) {
      insertionResult[j + 1] = insertionResult[j];
      j = j - 1;
    }

    insertionResult[j + 1] = key;
  }

  return insertionResult;
}
//Quick Sort => 배열을 피벗(pivot)을 기준으로 두 개의 하위 배열로 분할하고, 분할된 하위 배열을 재귀적으로 정렬

function quick(arr){
  let quickResult = arr.slice();
  
  if (quickResult.length <= 1) {
    return quickResult;
  }
  //재귀함수 클리어 조건 -> 필수
  let pivot = quickResult[0];
  let lesser = [];
  let greater = [];

  for(let i = 1; i < quickResult.length; i++){
    if(quickResult[i] < pivot){
      lesser.push(quickResult[i]);
    }else{
      greater.push(quickResult[i]);
    }
  }

  return quick(lesser).concat(pivot, quick(greater));
}
//merge sort : 데이터를 이분할 하는 작업을 반복하여 크기가 1인 데이터까지 분할, 분할된 데이터들을 정렬해 나가며 최종적으로 완전 정렬하는 알고리즘.
function mergeSort(arr) {
  let mergeSortResult = arr.slice();
  if (mergeSortResult.length <= 1) {
    return mergeSortResult;
  }
  
  let mid = Math.floor(mergeSortResult.length / 2);
  let left = mergeSortResult.slice(0, mid);
  let right = mergeSortResult.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
}
//배열을 이분화하는 과정(재귀)
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  console.log(left, right);
  return result.concat(left.slice(i), right.slice(j));
}

// 무작위 10개 난수 생성 (중복 제거)
let inputSet = new Set();
while (inputSet.size < 10) {
  inputSet.add(Math.floor(Math.random()*100 + 1));
}
let input = Array.from(inputSet).join(" ").split(' ').map((n) => {
  return parseInt(n, 10)});
console.log(input);

// console.log(bubble(input));
console.log(selection([10, 9, 8, 5, 6, 1, 3, 4, 2, 1]));
// console.log(insertion(input));
// console.log(quick(input));
// console.log(mergeSort(input));