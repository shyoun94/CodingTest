function solution(data, col, row_begin, row_end) {
    const sortData = data.sort((a,b) => a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1]);
    const arr = [];
    for(let i = row_begin; i <= row_end; i++){
        const xor = sortData[i-1].reduce((arr, cur) => arr + (cur % i), 0);
        arr.push(xor);
    }
    return arr.reduce((arr, cur) => arr ^ cur, 0);
}