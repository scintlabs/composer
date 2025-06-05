"use client"

import React, { useCallback } from "react"
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useEdgesState,
    useNodesState,
    Node,
    Edge,
} from "reactflow"
import "reactflow/dist/style.css"

interface CanvasNode {
    id: string
    type: string
    x: number
    y: number
    width: number
    height: number
    color?: string
    text?: string
    file?: string
    subpath?: string
    url?: string
    label?: string
    background?: string
    backgroundStyle?: string
}

interface CanvasEdge {
    id: string
    fromNode: string
    toNode: string
    fromSide?: string
    toSide?: string
    fromEnd?: string
    toEnd?: string
    color?: string
    label?: string
}

interface CanvasData {
    nodes?: CanvasNode[]
    edges?: CanvasEdge[]
}

function parseColor(color?: string): string | undefined {
    if (!color) return undefined
    const presets: Record<string, string> = {
        "1": "#ef4444",
        "2": "#f97316",
        "3": "#eab308",
        "4": "#22c55e",
        "5": "#06b6d4",
        "6": "#a855f7",
    }
    return presets[color] ?? color
}

const ProjectDashboard: React.FC = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([])
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([])

    const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        file.text().then((text) => {
            try {
                const data: CanvasData = JSON.parse(text)
                const rfNodes = data.nodes?.map<Node>((n) => ({
                    id: n.id,
                    position: { x: n.x, y: n.y },
                    data: { label: n.text || n.label || n.file || n.url || "" },
                    style: {
                        width: n.width,
                        height: n.height,
                        backgroundColor: parseColor(n.color),
                    },
                    type: "default",
                })) ?? []
                const rfEdges = data.edges?.map<Edge>((e) => ({
                    id: e.id,
                    source: e.fromNode,
                    target: e.toNode,
                    label: e.label,
                })) ?? []
                setNodes(rfNodes)
                setEdges(rfEdges)
            } catch (err) {
                console.error("Invalid JSON", err)
            }
        })
    }, [setNodes, setEdges])

    return (
        <div className="flex flex-col flex-1 h-screen bg-[#181818] text-white">
            <div className="p-2 border-b border-neutral-700 bg-neutral-800">
                <input type="file" accept="application/json" onChange={onFileChange} />
            </div>
            <div className="flex-1">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    fitView
                >
                    <Background />
                    <MiniMap />
                    <Controls />
                    <style jsx global>{`
                        .react-flow__controls {
                            background-color: #2a2a2a;
                            border: 1px solid #444;
                            box-shadow: none;
                        }
                        .react-flow__controls-button {
                            background: #3b3b3b;
                            border-bottom: 1px solid #555;
                            color: #eee;
                        }
                        .react-flow__controls-button:hover {
                            background: #4b4b4b;
                        }
                        .react-flow__controls-button svg {
                            fill: #eee;
                        }
                        .react-flow__minimap {
                            background-color: #2a2a2a;
                        }
                    `}</style>
                </ReactFlow>
            </div>
        </div>
    )
}

export default ProjectDashboard
