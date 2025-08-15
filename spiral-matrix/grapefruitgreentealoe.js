/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || matrix[0].length === 0) {
        return [];
    }

    const m = matrix.length;
    const n = matrix[0].length;
    const result = [];

    // [x 방향, y 방향]
    const directions = [[1, 0], [0, 1], [-1, 0],[0, -1],]; // 오른쪽, 아래, 왼쪽, 위
    let dirIndex = 0;

    let x = 0;
    let y = 0;

    for (let i = 0; i < m * n; i++) {
        result.push(matrix[y][x]);
        matrix[y][x] = null; // 방문한 셀은 null로 표시

        let nextX = x + directions[dirIndex][0];
        let nextY = y + directions[dirIndex][1];

        // 다음 위치가 범위를 벗어나거나 이미 방문한 곳이라면 방향 전환
        if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m || matrix[nextY][nextX] === null) {
            dirIndex = (dirIndex + 1) % 4;
        }

        // 새로운 방향으로 이동
        x += directions[dirIndex][0];
        y += directions[dirIndex][1];
    }

    return result;
};

//시간복잡도 : O(m×n) 여기서 m은 행의 수, n은 열의 수.
//공간복잡도 : O(m×n)
