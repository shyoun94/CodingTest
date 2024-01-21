// function solution(stones, k) {
//     var answer = 0;
//     let count = 0;
//     let maxLength = 0;
//     let currentLength = 0;
//     while(maxLength<k){
//         for(let i=0; i<stones.length; i++){
//             if(stones[i]===0){
//                 stones[i] = 0;
//                 currentLength++;
//                 if(maxLength<currentLength){
//                     maxLength = currentLength;
//                 }
//             } else {
//                 stones[i]--;
//                 currentLength = 0;
//             }
//         }
//         count++
//     }
//     return answer = count-1;
// }

function solution (stones, k) {
    return BS(stones, k, 1, 200000000)
}
function BS (stones, k, left, right){
  
  if(left === right) return left;
  
  let mid = Math.round((left + right) / 2);
  let count = 0
  for(let i=0; i<stones.length; i++){
    if(count === k){
        break;
    }
    let value = stones[i] - (mid-1);
    value <= 0 ? count++: count = 0;
}
    if(count === k){
        return BS(stones, k, left, mid -1)
    }else{
        return BS(stones, k, mid, right)
    }
}