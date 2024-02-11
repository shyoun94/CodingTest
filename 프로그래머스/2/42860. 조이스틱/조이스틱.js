function solution(name) {
    var answer = 0;
    let temp = name.split("").map((str) => str.charCodeAt())
    let min_move = name.length - 1
    console.log(temp)
    for(let i=0; i<temp.length; i++){
        answer += Math.min(temp[i]-65, 91-temp[i])
        let count = i+1;
        for(let j=i+1; j<temp.length; j++){
            if(temp[j] === 65){
                count++;
            }else{
                break;
            }
        }
        min_move = Math.min(
                      min_move,
                      i * 2 + name.length - count,
                      i + 2 * (name.length - count),
                    );
        
    }
    return answer+min_move;
}
