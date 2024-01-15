function solution(skill, skill_trees) {
    var answer = 0;
    
    for(let i=0; i<skill_trees.length; i++){
        let skillTree = skill_trees[i].split("");
        for(let j=0; j<skillTree.length; j++){
           if(skill.indexOf(skillTree[j]) === -1){
               skillTree.splice(j, 1);
               j--;
           }
        }
        skill_trees[i] = skillTree.join("");
    }
    for(let i=0; i<skill_trees.length; i++){
        let isCheck = true
        for(let j=0; j<skill_trees[i].length; j++){
            if(skill[j] !== skill_trees[i][j]){
                isCheck = false
                break;
            }
        }
        if(isCheck){
            answer++
        }
    }
    return answer;
}