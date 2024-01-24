function solution(keymap, targets) {
    var answer = [];
    for(let target of targets){
        let result = 0;
        for(let i=0; i<target.length; i++){
            let min = Infinity;
            for(let key of keymap){
                if(key.indexOf(target[i]) > -1){
                    min = Math.min(min, key.indexOf(target[i])+1)
                }
            }
            result+=min;
        }
        if(result === Infinity) {
            answer.push(-1)
        }else{
            answer.push(result)
        }
    }
    return answer;
}