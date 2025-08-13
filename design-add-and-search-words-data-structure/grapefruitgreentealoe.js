/*
효율적으로 해결하는 방법: trie
트라이는 문자열의 집합을 저장하고 검색하는데 최적화된 트리 형태의 자료구조이다
트라이는 노드들로 구성. 
children: 자식 노드들을 저장하는 배열이나 해시맵. 이 문제에서는 소문자 알파벳 26개를 다루므로, 크기가 26인 배열을 사용하는 것이 효율적이다. 
isEndOfWord : 현재 노드까지의 경로가 완전한 단어를 형성하는지 여부를 나타내는 불리언값. 
 
 */

// WordDictionary 생성자 함수
var WordDictionary = function() {
    this.root = new TrieNode();

};


// 트라이 노드 생성자 함수
function TrieNode() {
  this.children = {};
  this.isEndOfWord = false;
}

/** 
 * @param {string} word
 * @return {void}
 */

// root노드에서 시작하여, 단어의 각문자를 순서대로 탐색
// 현재 문자에 해당하는 자식 노드가 없으면, 새로운 노드를 생성하고 연결. 
// 현재 노드를 방금 이동한 자식 노드로 업데이트. 
// 단어의 마지막 문자를 처리한 후, 최종 노드의 isEndOfWord를 True로 설정.
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (const char of word) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
  }
  node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */

/*
재귀함수를 이용하는 것이 가장 직관적이다. 
재귀호출 조건: word가 비어있고 현재 노드가 isEndOfWord라면 True를 반환. 
word가 비어있지만, isEndOfWord가 False라면 False반환
현재 문자가 알파벳일 때 해당 문자에 해당하는 자식 노드로 이동하여 재귀호출 진해
문자가 .일때 현재 노드의 모든 자식노드(null이 아닌) 에 대해 재귀 호출 수행. 
이 중 하나라도 True를 반환하면 전체 결과는 True가 된다. 
모든 자식 노드를 탐색해도 True가 안나오면 False 반환. 
*/
WordDictionary.prototype.search = function(word) {
  // 재귀적으로 탐색을 수행하는 헬퍼 함수
  const searchInNode = (wordPart, node) => {
    if (!wordPart) {
      return node.isEndOfWord;
    }

    const char = wordPart[0];
    const remainingWord = wordPart.slice(1);

    if (char === '.') {
      for (const childChar in node.children) {
        if (searchInNode(remainingWord, node.children[childChar])) {
          return true;
        }
      }
      return false;
    } else {
      if (node.children[char]) {
        return searchInNode(remainingWord, node.children[char]);
      } else {
        return false;
      }
    }
  };

  return searchInNode(word, this.root);
};
/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

