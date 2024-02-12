function solution(maps) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const n = maps.length;
    const m = maps[0].length;
    let queue = [[0, 0, 1]];  
    maps[0][0] = 0;  

    while (queue.length > 0) {
        const [x, y, count] = queue.shift();

        if (x === n - 1 && y === m - 1) {
            return count;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                queue.push([nx, ny, count + 1]);
                maps[nx][ny] = 0;
            }
        }
    }

    return -1;  
}