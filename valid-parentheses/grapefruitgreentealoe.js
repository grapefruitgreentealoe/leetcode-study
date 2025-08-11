/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let i = 0;
    const openArr = ['(',"[","{"]
    const closeArr = [')',']',"}"]
    const openStack = [];

    while(i<s.length){
        if(openArr.includes(s[i])){
            openStack.push(s[i])
        }
        else if(closeArr.includes(s[i])){
            const lastOpenBracelet = openStack.pop();
            if(openArr.indexOf(lastOpenBracelet) !== closeArr.indexOf(s[i])){
                return false;
            }
        }
        i++
    }
    return openStack.length == 0;
}

//시간복잡도: O(n)
//공간복잡도 : O(n)

