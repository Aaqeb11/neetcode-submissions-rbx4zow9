class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    bfs(grid, q, seen) {
        const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
        while (q.length) {
            const [row, col] = q.shift();
            for (const [dr, dc] of dirs) {
                const nr = row + dr;
                const nc = col + dc;
                if (
                    nr < 0 ||
                    nc < 0 ||
                    nr >= grid.length ||
                    nc >= grid[0].length ||
                    seen[nr][nc] ||
                    grid[nr][nc] === '0'
                ) continue;
                seen[nr][nc] = true;
                q.push([nr, nc]);
            }
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
                seen[i][j] = true;
                q.push([i,j]);
                this.bfs(grid,q, seen);
            }
        }
        return count;
    }
}
