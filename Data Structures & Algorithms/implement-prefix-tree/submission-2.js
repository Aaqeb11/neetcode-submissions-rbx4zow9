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
