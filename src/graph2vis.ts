import {GraphNode} from "./Graph";
import {VizEdge, VizModel, VizNode} from "./VizModel";

export const graph2vis = (input:Array<GraphNode>):VizModel => {
    const nodes:Array<VizNode> = []
    const edges:Array<VizEdge> = []

    for(let node of input){
        nodes.push({
            id:node.id,
            label:node.name
        });
        for(let neighbour of node.neighbours){
            edges.push({
                from:node.id,
                to:neighbour
            })
        }
    }
    return{nodes,edges}
}