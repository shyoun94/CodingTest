// function solution(genres, plays) {
//     var answer = [];
//     let temp = {}
//     let max = -1;
//     for (let i = 0; i < genres.length; i++) {
//         if (genres[i] in temp) {
//             temp[genres[i]] += plays[i];
//         } else {
//             temp[genres[i]] = plays[i];
//         }
//     }
//     const entries = Object.entries(temp)
//     entries.sort((a,b)=>b[1]-a[1])
//     let obj = genres.map((i,j)=>({
//         genre: i,
//         idx: j,
//         count: plays[j]
//     }))
//     console.log(obj, entries)
//     for(let i=0; i<entries.length; i++){
//         const popCounts = obj
//         .filter(obj => obj.genre === entries[i][0])
//         .sort((a, b) => {
//             if (a.count === b.count) {
//               return a.idx - b.idx;
//             } else {
//               return b.count - a.count;
//             }
//           })
//         console.log(popCounts)
//         for(let i=0; i<2;i++){
            
//                 answer.push(popCounts[i].idx)
//         }
//         console.log(answer)
//     }
    
//     return answer;
// }
function solution(genres, plays) {
    
    let answer = [];
  
    let playCntByGenre={}
    for(let i=0;i<genres.length;i++){
        playCntByGenre[genres[i]]=playCntByGenre[genres[i]] ? playCntByGenre[genres[i]]+plays[i] : plays[i]
    }

    let keyValueArr=Object.entries(playCntByGenre)
    keyValueArr.sort((a,b)=>b[1]-a[1]);
    
    let allInfoObj=genres.map((g,i)=>({
        genre:g,
        index:i,
        playCnt:plays[i]
    })) 
    console.log(allInfoObj)
   
    keyValueArr.forEach((k,i)=>{
        let current=[];
        for(let j=0;j<allInfoObj.length;j++){
            if(k[0]===allInfoObj[j].genre){
                current.push(allInfoObj[j]);
            }
        }
        current.sort((a,b)=>b.playCnt-a.playCnt);
        current.forEach((c,i)=>{
            if(i<2){
             
            answer.push(c.index)
            }        
        })
    })
    
    return answer;
}

