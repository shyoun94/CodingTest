function solution(n, works) {
    var answer = 0;
    let temp = works.sort((a,b)=> a - b)
    while(n){
        const max = temp[temp.length-1];
    
    for(let i = temp.length-1; i >= 0; i--) {
      if(temp[i] >= max) {
        temp[i]--;
        n--;
      }
        if(!n) break;
    }
    }
    for(let i=0; i<temp.length; i++){
        if(temp[i]<0){
            answer = 0
        }else{
        answer += temp[i]*temp[i]
        }
    }
    return answer;
}