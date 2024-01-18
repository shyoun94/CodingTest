function solution(operations) {
    var answer = [];
    let temp = {};
    let tempArr = [];
    for(let i=0; i<operations.length; i++){
        operations[i] = operations[i].split(" ")
        if(operations[i][0] === "I"){
            tempArr.push(operations[i][1])
            tempArr.sort((a,b)=>a-b)
        }else{
            if(operations[i][1] === "-1"){
                tempArr.shift();
            }else{
                tempArr.pop();
            }
        }
    }
    if(tempArr.length === 0){
        answer = [0,0]
    }else{
        answer = [parseInt(tempArr[tempArr.length-1]), parseInt(tempArr[0])]
    }
    return answer;
}