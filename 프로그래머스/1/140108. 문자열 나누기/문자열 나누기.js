function solution(s) {
    var answer = 0;
    let stack = [];
    let result = []
    for(let i=0; i<s.length; i++){
        if(stack.length === 0){
            stack.push(s[i])
        }else if(stack[stack.length-1] === s[i]){
            stack.push(s[i])
        }else{
            stack.pop();
            if(stack.length===0){
                answer++
            }
        }
        console.log(stack)
    }
    if(stack.length > 0){
        answer++;
    }
    return answer;
}