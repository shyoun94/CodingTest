function solution(n) {
    var answer = 0;
    let binary = n.toString(2);
    let count = 0;
    let upCount = 0;
    for(let i=0; i<binary.length; i++){
        if(binary[i] === "1"){
            count++;
        }
    }
    while(count !== upCount){
        upCount = 0;
        n++;
        let secondBinary = n.toString(2)


        for(let i=0; i<secondBinary.length; i++){
            if(secondBinary[i] === "1"){
                upCount++;
            }
        }
    }
    return answer = n;
}