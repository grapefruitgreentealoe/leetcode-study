/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // 그리드가 비어있는 경우, 0을 반환합니다.
    if (!grid || grid.length === 0) {
        return 0;
    }

    let numRows = grid.length;
    let numCols = grid[0].length;
    let numIslands = 0;

    // DFS (깊이 우선 탐색) 함수
    const dfs = (row, col) => {
        // 그리드 범위를 벗어나거나 현재 셀이 '0'인 경우
        if (row < 0 || row >= numRows || col < 0 || col >= numCols || grid[row][col] === '0') {
            return;
        }

        // 현재 섬의 일부를 방문했으므로 '0'으로 변경하여 다시 방문하지 않도록 처리
        grid[row][col] = '0';

        // 상, 하, 좌, 우 인접 셀에 대해 재귀적으로 탐색
        dfs(row + 1, col); // 아래
        dfs(row - 1, col); // 위
        dfs(row, col + 1); // 오른쪽
        dfs(row, col - 1); // 왼쪽
    };

    // 그리드의 모든 셀을 순회
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            // '1'을 발견하면 새로운 섬이므로
            if (grid[i][j] === '1') {
                numIslands++; // 섬의 개수를 증가시키고
                dfs(i, j); // DFS를 시작하여 이 섬과 연결된 모든 부분을 '0'으로 바꿉니다.
            }
        }
    }

    return numIslands;
};

// 시간복잡도 : O(m*n)
// 공간복잡도 : O(m*n). 최악의 재귀 호출 스택 수