/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // m x n 격자를 위한 2차원 배열을 생성.
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));

    // 첫 번째 행과 첫 번째 열을 1로 초기화.
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    // 나머지 칸에 대해 점화식을 적용하여 경로의 수를 계산.
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};

//시간복잡도: O(m*n)
//공간복잡도: O(m*n)