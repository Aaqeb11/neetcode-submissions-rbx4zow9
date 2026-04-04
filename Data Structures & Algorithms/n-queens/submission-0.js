class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let result = [];
        let cols = new Set();
        let diag1 = new Set();
        let diag2 = new Set();
        let queensCols = []; 

        const backtrack = (row)=>{
            if(row === n){
                result.push(queensCols.map((col)=>{
                return ('.'.repeat(col) + 'Q' + '.'.repeat(n-col-1))
                }))

                return;
            }

            for(let col=0;col<n;col++){
                if(cols.has(col) || diag1.has(row+col) || diag2.has(row-col))  continue;

                cols.add(col);
                queensCols.push(col)
                diag1.add(row+col);
                diag2.add(row-col);

                backtrack(row+1);

                cols.delete(col);
                queensCols.pop();
                diag1.delete(row+col);
                diag2.delete(row-col)
            }
        }

        backtrack(0)
        return result
    }
}
