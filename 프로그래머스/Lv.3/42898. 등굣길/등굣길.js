function solution(m, n, puddles) {

    const map = Array.from(Array(n), () => Array(m).fill(1)); // 미리 1로 채워두기
    const denominator = 1000000007;

    // 왼쪽 끝, 위 끝에 장애물 있는 경우 0으로 바꾸기
    for(const puddle of puddles){
        const [x, y] = puddle;
        if(x === 1)
            for(let i = y-1; i < n; i++)
                map[i][x-1] = 0;
        if(y === 1)
            for(let i = x-1; i < m; i++)
                map[y-1][i] = 0;
    }

    // 우물인 곳 0으로 만들기
    for(const puddle of puddles){
        const [x, y] = puddle;
        map[y-1][x-1] = 0;
    }

    for(let x = 0; x < m; x++){
        for(let y = 0; y < n; y++){
            // 범위 벗어나는 경우
            if(x-1 < 0 || y-1 < 0)
                continue;
            // 우물인 곳 벗어나기
            if(map[y][x] === 0)
                continue;
            // 왼쪽 체크, 위 체크
            map[y][x] = map[y][x-1] + map[y-1][x];
            map[y][x] = map[y][x] % denominator;
        }
    }
    return map[n-1][m-1];
}