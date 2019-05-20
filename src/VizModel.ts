export interface VizNode{
    id:number,
    label:string
}

export interface VizEdge{
    from:number,
    to:number
}

export interface VizModel {
    nodes:Array<VizNode>,
    edges:Array<VizEdge>

}