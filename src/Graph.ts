export interface GraphNode {
    id:number,
    name:string,
    neighbours:Array<number>
}

export interface Graph {
    nodes:Array<GraphNode>
}