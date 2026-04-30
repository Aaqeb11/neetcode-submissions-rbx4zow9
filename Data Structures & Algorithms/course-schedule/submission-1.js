class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjList = Array.from({ length: numCourses }, () => []);

        for(let i=0;i<prerequisites.length;i++){
            let pre = prerequisites[i];

            adjList[pre[1]].push(pre[0]);
        }

        for(let v=0;v<numCourses;v++){
            let q = [];
            let seen = {};

            for(let i=0;i<adjList[v].length;i++){
                q.push(adjList[v][i]);
            }

            while(q.length){
                let c = q.shift();
                seen[c] = true;

                if(c === v) return false;

                for(let i=0;i<adjList[c].length;i++){
                    let next = adjList[c][i];
                    if(!seen[next]) q.push(next);
                }
            }
        }

        return true;
    }
}
