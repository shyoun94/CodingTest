function solution(n, computers) {
    var answer = 0;
    let temp = {};
    let count = 0;
    for(let i=0; i<n; i++){
        temp[i] = false;
    }
    function dfs(i){
        temp[i] = true;
        for(let j=0; j<computers[i].length; j++){
            if(computers[i][j] === 1 && !temp[j]){
                dfs(j);
            }
        }
    }
    for(let i=0; i<computers.length; i++){
        if(!temp[i]){
            dfs(i);
            count++;
        }
    }
    return answer = count;
}