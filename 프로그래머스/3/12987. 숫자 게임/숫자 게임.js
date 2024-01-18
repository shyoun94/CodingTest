function solution(A, B) {
    var answer = 0;
    A = A.sort((a,b)=>b-a)
    B = B.sort((a,b)=>a-b)
    
    for(let i=0; i<A.length; i++){
        if(A[i] < B[B.length-1]){
            answer++;
            B.pop()
        }
    }
    console.log(A,B)
    return answer;
}