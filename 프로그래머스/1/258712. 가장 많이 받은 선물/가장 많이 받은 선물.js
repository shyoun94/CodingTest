function solution(friends, gifts) {
    var answer = 0;
    let giftCount = {}
    let temp = []
    for(let i=0; i<friends.length; i++){
        giftCount[friends[i]]={}
        for(let j=0; j<friends.length; j++){
            giftCount[friends[i]][friends[j]] = 0
        }
        giftCount[friends[i]]["count"] = 0;
        giftCount[friends[i]]["next"] = 0;
    }
    for(let gift of gifts){
     temp.push(gift.split(" "))   
    }
    for(let i=0; i<temp.length; i++){
        giftCount[temp[i][0]][temp[i][1]] ++;
        giftCount[temp[i][1]][temp[i][0]] --;
        giftCount[temp[i][0]]["count"] ++;
        giftCount[temp[i][1]]["count"] --;
    }
    for(let name in giftCount){
        for(let point in giftCount[name]){
            if(point !== "count" && point !== "next"){
                if(giftCount[name][point] > 0){
                    giftCount[name]["next"] ++;
                }else if(giftCount[name][point] === 0 && point !== name){
                    if(giftCount[name]["count"] > giftCount[point]["count"]){
                        giftCount[name]["next"] ++;
                    }
                }
            }
        }
    }
    for(let name in giftCount){
        if(giftCount[name]["next"] > answer){
            answer = giftCount[name]["next"]
        }
    }
    return answer;
}