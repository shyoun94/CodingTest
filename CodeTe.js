const emergency = [3, 76, 24];

function solution(emergency) {
  const sortedEmergency = emergency.slice().sort((a, b) => b - a);

  const ranks = emergency.map((item) => sortedEmergency.indexOf(item) + 1);

  return ranks;
}
console.log(solution(emergency));


const emergency = [3, 76, 24];

function solution(emergency) {
  const answer = [];
  
  for (let i = 0; i < emergency.length; i++) {
    let rank = 1;
    for (let j = 0; j < emergency.length; j++) {
      if (emergency[j] > emergency[i]) {
        rank++;
      }
    }
    answer.push(rank);
  }

  return answer;
}

console.log(solution(emergency));
