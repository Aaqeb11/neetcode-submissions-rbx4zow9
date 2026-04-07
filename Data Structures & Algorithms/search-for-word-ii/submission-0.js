class PrefixTree {
    constructor() {
        this.map = new Map();
        this.isEnd = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this;
        for(let i=0;i<word.length;i++){
            if(!curr.map.has(word[i])){
                curr.map.set(word[i], new PrefixTree());
            }
            curr = curr.map.get(word[i]);
        }
        curr.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this;
        for(let i=0;i<word.length;i++){
            if(!curr.map.has(word[i])){
                return false;
            }
             curr = curr.map.get(word[i]);
        }
        return curr.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this;
        for(let i=0;i<prefix.length;i++){
            if(!curr.map.has(prefix[i])){
                return false;
            }
            curr = curr.map.get(prefix[i])
        }
        return true;
    }
}

class Solution {


    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const trie = new PrefixTree();
        for(let w of words){
            trie.insert(w);
        }
        const result = new Set();
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[i].length;j++){
                this.dfs(board,'',trie,i,j,result);
            }
        }
        return Array.from(result);
    }

    dfs(board, word, trie, row, col, result){
        if(row<0 || col <0 || row >= board.length || col >= board[0].length) return;

        if(board[row][col] === '#') return;

        const c = board[row][col];

        if(!trie.map.has(c)) return;

        const nextNode = trie.map.get(c);
        word+=c;

        if(nextNode.isEnd) result.add(word);

        board[row][col] = '#';

        this.dfs(board, word, nextNode, row + 1, col, result);
    this.dfs(board, word, nextNode, row - 1, col, result);
   this.dfs(board, word, nextNode, row, col+1, result);
    this.dfs(board, word, nextNode, row, col-1, result);

    board[row][col] = c;
    }
}
