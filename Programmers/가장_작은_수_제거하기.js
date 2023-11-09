function solution(arr) {
  var answer = [];
  const min = Math.min(...arr);
  const index = arr.indexOf(min);

  if (index !== -1) {
    answer = arr.splice(index, 1);
  }

  if (arr.length === 0) {
    arr.push(-1);
  }

  return arr;
}
