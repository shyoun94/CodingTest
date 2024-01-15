// function solution(n, stations, w) {
//     var answer = 0;
//     const map = Array.from(Array(n).fill(0));
//     let count = 0;
//     const coverage = w * 2 + 1;
//     let temp = 0;
//     for(let i=0; i<stations.length; i++){
//         let start = Math.max(stations[i] - w - 1, 0);
//         let end = Math.min(stations[i] + w - 1, n - 1);
//         for(let j=start; j<=end && j<n; j++){
//             map[j] = 1       
//         }
//     }
//     for(let i=0; i<map.length; i++){
//         if(map[i]===0){
//             count++;
//         }
//         if(map[i]===1 || i=== map.length-1){
//            temp += parseInt(count / (w * 2 + 1));
//             if(count % (w * 2 + 1) !== 0){
//                 temp++
//             }
//             count = 0;
//         }
//     }
//     return answer = temp;
// }
//효율성 떻어지는 코드 
function solution(n, stations, w) {
  let answer = 0;
  const distance = [];

  for (let i = 1; i < stations.length; i++) {
    distance.push(stations[i] - w - 1 - (stations[i - 1] + w));
  }
  distance.push(stations[0] - w - 1);
  distance.push(n - (stations[stations.length - 1] + w));

  for (const d of distance) {
    if (d <= 0) continue;
    else answer += Math.ceil(d / (2 * w + 1));
  }

  return answer;
}