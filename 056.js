// 문제56 : 객체의 함수 응용

// 데이터
nationWidth = {
    'korea': 420877,
    'Russia': 17098242,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
    'China': 9596961,
  }

// 출력
// England 22023
function similarSize(object){
  let arr = [];
  for(let key of Object.keys(object)){
    arr.push({key: key, value: object[key]});
  }
  arr.sort((a,b) => a.value-b.value);
  console.log(arr);

  if(arr[0].key === "korea"){
    return arr[1];
  }else {
    let koreaIndex = arr.findIndex((item) => item.key === "korea");
    let previousIndex = koreaIndex - 1;
    let nextIndex = koreaIndex + 1;

    if (previousIndex >= 0 && nextIndex < arr.length) {
      let previous = arr[previousIndex];
      let next = arr[nextIndex];
      return previous.value < next.value ? previous : next;
    } else if (previousIndex >= 0) {
      return arr[previousIndex];
    } else if (nextIndex < arr.length) {
      return arr[nextIndex];
    } else {
      // No similar size found
      return null;
    }
  }
}
const result = similarSize(nationWidth);
console.log(result);