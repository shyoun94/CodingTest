function solution(k, d) {
    var answer = 0;
    for(let i=0; i<=d; i+=k){
        let maxY = Math.sqrt(d*d - (i*i))
        if(maxY % k === 0){
            answer += (maxY / k)+1;
        }else{
            answer += (parseInt(maxY / k)+ 1);
        }
    }
    return answer;
}