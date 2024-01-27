function solution(begin, target, words) {
    var answer = Infinity;

    if(words.indexOf(target) === -1){
        return 0;
    }

    function dfs(word, count){
        if(word === target){
            answer = Math.min(answer, count);
            return;
        }
        
        for(let i=0; i<words.length; i++){
            let tempGrade = 0;
            for(let j=0; j<words[i].length; j++){
                if(words[i][j] === word[j]){
                    tempGrade++;
                }
            }
            console.log(tempGrade)
            if(tempGrade === word.length - 1){
                let nextWord = words[i];
                words.splice(i, 1);
                dfs(nextWord, count + 1);
                words.splice(i, 0, nextWord); // 재귀 호출이 끝나면 원래 상태로 복구
            }
        }
    }
    
    dfs(begin, 0);
    return answer === Infinity ? 0 : answer;
}
