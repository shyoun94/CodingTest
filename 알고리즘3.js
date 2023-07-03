
function findFirstRepeatedValue(arr) {
  const visited = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (visited[element]) {
      return element; // 가장 먼저 반복되는 원소 반환
    }
    // console.log(visited, element);
    visited[element] = true;
  }

  return null; // 반복되는 원소가 없는 경우
}

const arr = [3, 2, 4, 2, 1, 0, 3];
const firstRepeatedValue = findFirstRepeatedValue(arr);
console.log(firstRepeatedValue);


// function test2(arr) {
//   const useHash = {};
//   // useHash[3]
//   for (let i = 0; i < arr.length; i++) {
//       console.log(useHash[arr[i]])
//       if (useHash[arr[i]]) {
//           return arr[i]
//       } else {
//           // 해쉬테이블의 키로 arr의 원소를 차례로 등록
//           // {3:0, 2:1, }
//           useHash[arr[i]] = i;
//       }
//   }

// }

// const arr = [3, 2, 4, 2, 1, 0, 3];
// const firstRepeatedValue = test2(arr);
// console.log(firstRepeatedValue);