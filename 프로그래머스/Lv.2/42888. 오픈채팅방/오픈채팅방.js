function solution(record) {
    var answer = [];
    let user = {}
    for(let i=0; i<record.length; i++){
        record[i] = record[i].split(" ")
    }
    for(let i=0; i<record.length; i++){
        if(record[i].length === 3){
            user[record[i][1]] = record[i][2];
        } 
    }
    for(let i=0; i<record.length; i++){
        if(record[i][0] === "Enter"){
            answer.push(`${user[record[i][1]]}님이 들어왔습니다.`)
        }else if(record[i][0] === "Leave"){
            answer.push(`${user[record[i][1]]}님이 나갔습니다.`)
        }
        
    }
    return answer;
}