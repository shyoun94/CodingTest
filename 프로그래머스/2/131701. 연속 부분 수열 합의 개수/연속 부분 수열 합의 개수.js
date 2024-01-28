function solution(elements) {
    var answer = 0;
    let temp = [];
    const extendElements = [...elements,...elements]
    for(let k=1; k<=elements.length; k++){
        for(let i=0; i<=elements.length; i++){
            let arr = extendElements.slice(i,i+k);
            temp.push(arr.reduce((a,b)=>a+b));
        }
    }
    const myArr = new Set(temp)
    
    return answer=myArr.size;
}