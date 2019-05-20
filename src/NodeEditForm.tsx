import {Graph, GraphNode} from "./Graph";
import React, {useState} from "react";



interface NodeSelectorProps {
    nodes:Array<GraphNode>,
    selectedNode:number,
    setSelectedNode:(id:number) =>void,
}

const NodeSelector = (props:NodeSelectorProps) =>{
    const {nodes,selectedNode,setSelectedNode} = props;

    return  <select value={selectedNode}  onChange={(e) => setSelectedNode(Number(e.target.value))}>
        {nodes.map((node,index) => <option key={index} value={node.id}>{node.name}</option>)}
    </select>
}

export interface NodeEditFormProps {
    nodes:Array<GraphNode>,
    setNodes:(nodes:Array<GraphNode>) =>void
}

export const NodeEditForm = (props:NodeEditFormProps) => {
    const {nodes,setNodes} = props;
    const [nodeName,setNodeName] = useState('f')

    const addNode = (nodeName:string) =>{
        if(nodeName.length == 0) return
        setNodeName('');
        const newNode:GraphNode = {
            id:nodes.length,
            name:nodeName,
            neighbours:[]
        }
        setNodes([...nodes,newNode]);
    }

    const [fromNode,setFromNode] = useState(nodes[0].id);
    const [toNode,setToNode] = useState(nodes[0].id);

    const addEdge = () =>{
        const newNodes = nodes.map(
            node => node.id === fromNode ? {...node,neighbours:[...node.neighbours,toNode]} : node)
        setNodes(newNodes);
    }

    return <div>
        <input value={nodeName} onChange={e => setNodeName(e.target.value)} />
        <button onClick={() => addNode(nodeName)}>Add node</button>
        <NodeSelector nodes={nodes} selectedNode={fromNode} setSelectedNode={setFromNode}/>
        <NodeSelector nodes={nodes} selectedNode={toNode} setSelectedNode={setToNode}/>
        <button onClick={addEdge}>Add edge</button>
    </div>
}