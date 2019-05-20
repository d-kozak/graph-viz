import React, {useState} from "react";
// @ts-ignore
import Graph from "react-graph-vis";
import {graph2vis} from "./graph2vis";
import {NodeEditForm} from "./NodeEditForm";

const initialNodes = [
    {id: 0, name: 'x', neighbours: [1]},
    {id: 1, name: 'y', neighbours: [2]},
    {id: 2, name: 'z', neighbours: []},
]

export const App = () => {
    const [nodes, setNodes] = useState(initialNodes)
    const visGraph = graph2vis(nodes)

    const options = {
        edges: {
            color: "#000000"
        }
    };

    const events = {
        select: function (event: any) {
            const {nodes, edges} = event;
        }
    }

    return <div style={{width: '100%', height: '100%'}}>
        <NodeEditForm nodes={nodes} setNodes={setNodes}/>
        <Graph graph={visGraph} options={options} events={events}/>
    </div>
};