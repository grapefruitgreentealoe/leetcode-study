/*
nums 정수배열이 주어졌을대, 오름차순이 가장 오래 지속되는 길이. subsequence 즉 부분수열 이므로 중간에 다른 숫자가 끼어있어도 된다.
*/


//1. dp 점화식: dp[n] = dp[n]+1 or 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    // dp[i]는 nums[i]를 마지막 원소로 하는 가장 긴 증가 부분 수열의 길이를 저장합니다.
    const dp = new Array(nums.length).fill(1);
    let maxLength = 1;

    // 이중 반복문을 통해 dp 배열을 채웁니다.
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // nums[i]가 nums[j]보다 크면, nums[j]로 끝나는 수열 뒤에 nums[i]를 붙일 수 있습니다.
            if (nums[i] > nums[j]) {
                // dp[i]를 업데이트하여 가장 긴 길이를 찾습니다.
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        // 전체 배열에서 가장 긴 길이를 추적합니다.
        maxLength = Math.max(maxLength, dp[i]);
    }

    return maxLength;
};

/*
시간복잡도:O(n^2)
공간복잡도:O(n)
*/


//2. 이진탐색 활용 (O(nlogn) 충족)
/*
tails라는 배열을 사용하여 특정 길이의 증가 부분 수열을 만들 수 있는 최소 끝 값을 추적. 
tails 배열은 항상 오름차순으로 정렬된 상태를 유지하므로, 이진 탐색을 효율적으로 사용가능.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    // tails[i]는 길이가 i+1인 증가 부분 수열의 마지막 원소 중 최솟값임.
    const tails = [];

    for (const num of nums) {
        // 이진 탐색을 통해 num이 들어갈 위치를 찾습니다.
        let left = 0;
        let right = tails.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        //  1.num이 tails의 모든 원소보다 클 때
        // 가장 긴 증가 부분 수열의 길이가 +1
        if (left === tails.length) {
            tails.push(num);
        } else {
            // 2. num이 tails의 어떤 원소와 같거나 작을 때
            // tails의 해당 위치의 원소를 num으로 교체하여,
            // 앞으로 더 긴 증가 부분 수열을 만들 가능성을 높인다
            tails[left] = num;
        }
    }

    // tails 배열의 길이가 가장 긴 증가 부분 수열의 길이가 된다.
    return tails.length;
};

//시간복잡도: O(nlogn)
//공간복잡도: O(n)
