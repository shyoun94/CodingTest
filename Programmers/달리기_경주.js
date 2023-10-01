function solution(players, callings) {
  const playerMap = {};

  
  for (let i = 0; i < players.length; i++) {
      playerMap[players[i]] = i;
  }
  //플레이어와 순위를 hash로 저장
  for (let i = 0; i < callings.length; i++) {
      const idx = playerMap[callings[i]];
      const temp = players[idx-1];
    
      
      players[idx-1] = callings[i];
      players[idx] = temp;
    
      
      playerMap[callings[i]] = idx - 1;
      playerMap[temp] = idx;
  }
  //callings에서 호출 되면 인덱스를 하나씩 낮춤
  return players;
}