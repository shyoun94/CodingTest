// function solution(users, emoticons) {
//     var answer = [];
//     let discount = [10,20,30,40];
//     let temp = [];
//     let arr = []
//     function saleDFS(depth = 0){
//         if(depth === emoticons.length){
//             temp.push([...arr]);
//             return
//         }
//         for(let i=0; i<discount.length; i++){
//             arr[depth] = discount[i];
//             saleDFS(depth + 1)
//         }
//     }
//     saleDFS()
//     users.sort((a,b)=>a[0]-b[0])
    
//     temp.forEach((disC, idx)=>{
//         let plus = 0;
//         let sumP = 0;
        
//     })
//     return answer;
// }

function solution(users, emoticons) {
    const discountRate = [10, 20, 30, 40];
    const discountPrice = emoticons.map(emoticon => 
        discountRate.map(rate => [rate, emoticon - (emoticon * rate * 0.01)])
    );
    const combinations = generateCombinations(discountPrice);

    console.log(combinations.reverse())
    const answer = [];
    for(let i = 0; i < combinations.length; i++) {
        let totalPrice = 0;
        let joinCount = 0;
        for(let j = 0; j < users.length; j++) {
            const userRate = users[j][0];
            const userMaxMoney = users[j][1];
            let userPrice = 0;
            combinations[i].forEach(combination => {
                if(combination[0] >= userRate) {
                    userPrice += combination[1];
                }
            })
            if(userPrice >= userMaxMoney) {
                joinCount++;
            } else {
                totalPrice += userPrice;
            }            
        }
        answer.push([joinCount, totalPrice])
    }
    
    answer.sort((a, b) => {
        if(a[0] !== b[0]) return b[0] - a[0];
        else return b[1] - a[1];
    })
    // console.log(answer)
    return answer[0];
}

function generateCombinations(arrays) {
    if (arrays.length === 1) return arrays[0].map(value => [value]);
    let result = [];
    const [first, ...rest] = arrays;
    const subCombinations = generateCombinations(rest);
    for (let value of first) {
        for (let subCombination of subCombinations) {
            result.push([value, ...subCombination]);
        }
    }
    return result;
}
