class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const directions = [[-1,0],[0,1],[1,0],[0,-1]];
        const ROTTEN = 2;
        const FRESH = 1;
        const EMPTY = 0;
        const q = [];
        let freshOranges = 0;

        if(grid.length === 0) return 0;

        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j] === ROTTEN){
                    q.push([i,j])
                }
                if(grid[i][j]===FRESH){
                    freshOranges++
                }
            }
        }
         let minitues = 0
        let currQueueSize = q.length;

        while(q.length > 0){
            if(currQueueSize ===0){
                minitues++;
                currQueueSize = q.length;
            }
            const currOrange = q.shift();
            currQueueSize--;
            const row = currOrange[0];
            const col = currOrange[1];
            for(let i=0;i<directions.length;i++){
                const currDir = directions[i];
                const nextRow = currDir[0] + row;
                const nextCol = currDir[1] + col;

                if(nextRow < 0|| nextRow >=grid.length || nextCol < 0 || nextCol >= grid[0].length) continue;

                if(grid[nextRow][nextCol] === FRESH){
                    grid[nextRow][nextCol] = 2;
                    freshOranges--;
                    q.push([nextRow,nextCol]);
                }
            }
        }

        if(freshOranges !== 0) return -1;

        return minitues;
        
    }
}
