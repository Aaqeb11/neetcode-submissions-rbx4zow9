class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let step = 0;
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j] === 0){
                    this.dfs(grid, i, j, step)
                }else{
                    continue;
                }
            }
        }
        return grid;
    }
    dfs(grid, row, col, step){
        const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
          if (
            row < 0 ||
            col < 0 ||
            row >= grid.length ||
            col >= grid[0].length || 
            step > grid[row][col] 
        ) return;

        grid[row][col] = step;

        
        for(let i=0;i<dirs.length;i++){
            const currDir = dirs[i];
            this.dfs(grid, row+currDir[0], col+currDir[1], step+1);
        }
    }

}