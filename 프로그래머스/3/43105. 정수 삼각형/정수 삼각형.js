function solution(triangle) {
    var answer = 0;
    
    for(let i=triangle.length-1; i>=0; i--){
        for(let j=0; j<triangle[i].length-1; j++){
            let temp = Math.max(triangle[i][j], triangle[i][j+1])
            triangle[i - 1][j]+=temp;
        }
    }
    return answer = triangle[0][0];
    
}