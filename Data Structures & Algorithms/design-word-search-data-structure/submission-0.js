class WordDictionary {
    constructor() {
        this.map = new Map();
        this.isEnd = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
         let curr = this;
        for(let i=0;i<word.length;i++){
            if(!curr.map.has(word[i])){
                curr.map.set(word[i], new WordDictionary());
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
            if(word[i] === '.'){
                for(let child of curr.map.values()){
                    if(child.search(word.slice(i+1))){
                        return true
                    }
                }
                return false;
            }

            if(!curr.map.has(word[i])){
                return false;
            }
             curr = curr.map.get(word[i]);
        }
        return curr.isEnd;
    }
}
