// function reverseStr(str){
//   let result = "";
//   for(let index of str){
//   result = index + result;
//   }
//   return result;
// }

// console.log(reverseStr("안녕하세요"))

// 정렬된 두 개의 배열을 병합하기
        // [] + []

function mergeArray(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return console.log("배열이 아닙니다.");
  }else{

  let mergedArray = [];
  mergedArray = mergedArray.concat(arr1, arr2);

  for (let i = 0; i < mergedArray.length - 1; i++) {
    for (let j = 0; j < mergedArray.length - i; j++) {
      if (mergedArray[j] > mergedArray[j + 1]) {
        [mergedArray[j], mergedArray[j+1]] = [mergedArray[j+1], mergedArray[j]];
      }
    }
  }
  return mergedArray
}
}
const arr1 = [1,3,5,7,9];
const arr2 = [1,2,4,6,8,10];

console.log(mergeArray(arr1, arr2));