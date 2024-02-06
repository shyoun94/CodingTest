function solution(k, tangerine) {
    let hash = {};
    let answer = 0;
    
    for (let i = 0; i < tangerine.length; i++) {
        if (hash[tangerine[i]] === undefined) {
            hash[tangerine[i]] = 1;
        } else {
            hash[tangerine[i]]++;
        }
    }

    let sortedSizes = Object.keys(hash).sort((a, b) => hash[a] - hash[b]);

    const restCount = tangerine.length - k;
    let sum = 0;
    answer = Object.values(hash).length;
    for (const count of sortedSizes) {
        if (sum + hash[count] > restCount) {
            break;
        }
        sum += hash[count];
        answer--;
    }
    return answer;
}