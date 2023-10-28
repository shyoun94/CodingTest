function solution(n)
{
    var answer = 0;
    const tempN = n.toString();
    for(let i=1; i<tempN.length; i++){
       answer += parseInt(tempN[i])
    }
    
    return answer;
}