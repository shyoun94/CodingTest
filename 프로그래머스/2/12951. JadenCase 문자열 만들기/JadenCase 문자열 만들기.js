function solution(s) {
    var answer = '';
    let arr = s.toLowerCase().split(" ")

    for(let i=0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    answer = arr.join(" ")
    return answer;
}