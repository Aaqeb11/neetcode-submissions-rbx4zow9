class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let result = [];
        if(!digits.length) return result;

        let map = {
            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"]
        }

        const backtrack = (index,path)=>{
            if(index === digits.length){
                result.push(path.join(''));
                return;
            }

            for(const letter of map[digits[index]]){
                path.push(letter);
                backtrack(index+1,path);
                path.pop()
            }
        }

        backtrack(0, []);
        return result;
    }
}
