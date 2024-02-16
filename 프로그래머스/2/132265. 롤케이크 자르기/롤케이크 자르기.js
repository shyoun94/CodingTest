function solution(topping) {
    let answer = 0;
    let left = new Array(10001).fill(0);
    let right = new Array(10001).fill(0);
    let leftCount = 0;
    let rightCount = 0;

    for (let i = 0; i < topping.length; i++) {
        right[topping[i]]++;
        if (right[topping[i]] === 1) rightCount++;
    }
    console.log(right)
    for (let i = 0; i < topping.length - 1; i++) {
        left[topping[i]]++;
        if (left[topping[i]] === 1) leftCount++;
        if (right[topping[i]]-- === 1) rightCount--;

        if (leftCount === rightCount) answer++;
    }

    return answer;
}
