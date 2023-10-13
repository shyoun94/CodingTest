function solution(people, limit) {
  var answer = 0;
  people.sort((a,b)=>b-a);
  let k=1;
  for(let i=0; i<people.length; i++){
      if(people[i] + people[people.length-k] <= limit){
          answer++;
          people.pop()
      }else{
          answer++;
      }
  }
  return answer;
}

//탐욕법을 이용한 방법으로
//매 선택이 최선의 선택이라 생각하고 진행하는 방식
//사람을 내림차순으로 정렬해서 몸무게가 무거운 사람부터 태움