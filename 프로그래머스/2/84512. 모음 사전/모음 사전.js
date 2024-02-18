function solution(word) {
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    let mul = [781, 156, 31, 6, 1];

    for(let i = 0; i < word.length; i++){
        let index = alphabets.indexOf(word[i]);
        answer += index * mul[i] + 1;
    }
    
    return answer;
}
