function solution(n,a,b)
{
    var answer = 0;
    let tempA = a;
    let tempB = b;
    while(tempA !== tempB){
        tempA = Math.ceil(tempA/2);
        tempB = Math.ceil(tempB/2);
        answer++;
    }

    return answer;
}

//a와 b를 각각 /2를 통해 몇번째에서 만나는지 check하는 방법