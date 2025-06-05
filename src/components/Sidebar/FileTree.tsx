"use client"

import React, { useCallback, useEffect, useState } from "react"

interface FileNode {
  name: string
  path: string
  type: "file" | "directory"
}

interface DirectoryResponse {
  path: string
  children: FileNode[]
}

export default function FileTree() {
  const [tree, setTree] = useState<Record<string, FileNode[]>>({})
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ "": true })

  const loadDirectory = useCallback(async (dir: string) => {
    if (tree[dir]) return
    try {
      const res = await fetch(`/api/files?path=${encodeURIComponent(dir)}`)
      const data: DirectoryResponse = await res.json()
      setTree((prev) => ({ ...prev, [dir]: data.children }))
    } catch (err) {
      console.error(err)
    }
  }, [tree])

  useEffect(() => {
    loadDirectory("")
  }, [loadDirectory])

  const toggle = (dir: string) => {
    const willExpand = !expanded[dir]
    setExpanded((prev) => ({ ...prev, [dir]: willExpand }))
    if (willExpand) {
      loadDirectory(dir)
    }
  }

  const renderNodes = (dir: string) => {
    const nodes = tree[dir]
    if (!nodes) return null
    return nodes.map((node) => {
      if (node.type === "directory") {
        return (
          <div key={node.path} className="group">
            <button
              onClick={() => toggle(node.path)}
              className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
            >
              <svg
                className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${
                  expanded[node.path] ? "rotate-90" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg
                className="mr-2 h-3.5 w-3.5 opacity-70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{node.name}</span>
            </button>
            {expanded[node.path] && (
              <div className="ml-6">{renderNodes(node.path)}</div>
            )}
          </div>
        )
      }
      return (
        <a
          key={node.path}
          href="#"
          className="flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
        >
          <svg
            className="mr-2 h-3.5 w-3.5 opacity-60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{node.name}</span>
        </a>
      )
    })
  }

  return <div className="pt-3 flex-1 overflow-y-auto">{renderNodes("")}</div>
}
