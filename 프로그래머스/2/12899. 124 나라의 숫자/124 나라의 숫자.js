function solution(n) {
    var answer = '';
    let temp = [];
    while(n > 0) {
        if(n % 3 === 0) {
            temp.push(4);
            n = Math.floor(n / 3) - 1;
        } else {
            temp.push(n % 3);
            n = Math.floor(n / 3);
        }
    }
    answer = temp.reverse().join("")
    return answer;
}