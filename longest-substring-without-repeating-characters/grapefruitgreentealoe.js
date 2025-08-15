/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 문자열의 길이가 0이면 0을 반환.
    if (s.length === 0) {
        return 0;
    }

    let maxLength = 0;
    let left = 0;
    const charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        // 현재 문자가 이미 Set에 있다면, 중복을 제거하기 위해 왼쪽 포인터를 이동시킨다.
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        // 현재 문자를 Set에 추가.
        charSet.add(s[right]);

        // 현재 윈도우의 길이를 계산하고, 최대 길이를 갱신.
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

//시간복잡도: 문자열을 한번만 순회하므로 O(n)
//공간복잡도: O(k)(문자 집합의 크기)
