function solution(n, s) {
    var answer = [];
    let tempArr = [];
    
    if(s<n){
        answer.push(-1)
    }else{
        for(let i=n; i>0;i--) {
            const avg = parseInt(s/i);
            answer.push(avg);
            s -= avg
    }
    }
    return answer;
}