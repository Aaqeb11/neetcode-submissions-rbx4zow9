class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    bfs(grid,q, seen) {
        while(q.length){
            const currPos = q.shift();
            const row = currPos[0];
            const col = currPos[1];
            if (
            row < 0 ||
            col < 0 ||
            row >= grid.length ||
            col >= grid[0].length ||
            seen[row][col] || 
            grid[row][col] === '0'
        ) continue;
        grid[row][col] = 0;
        seen[row][col] = true;
        
        q.push([row,col+1])
        q.push([row+1,col])
        q.push([row,col-1])
        q.push([row-1,col]);
        }
    }
    numIslands(grid) {
        let count = 0;
        const q = [];
        const seen = new Array(grid.length)
            .fill(0)
            .map(() => new Array(grid[0].length).fill(false));
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j] === '0' || seen[i][j]) continue;

                count++;
                q.push([i,j]);
                this.bfs(grid,q, seen);
            }
        }
        return count;
    }
}
