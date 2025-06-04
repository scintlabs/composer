"use client"

import React, { useState } from "react"

type ExpandedFoldersState = {
    [folderPath: string]: boolean
}

interface FileItemProps {
    name: string
    path?: string
    isFolder?: boolean
    isExpanded?: boolean
    onClick?: () => void
}

interface SidebarProps {
    sidebarType?: string
}

const FileItem: React.FC<FileItemProps> = ({
    name,
    isFolder = false,
    isExpanded = false,
    onClick,
}) => {
    if (isFolder) {
        return (
            <button
                onClick={onClick}
                className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
            >
                <svg
                    className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${isExpanded ? "transform rotate-90" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
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
                <span>{name}</span>
            </button>
        )
    }

    return (
        <a
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
            <span>{name}</span>
        </a>
    )
}

export default function FileTree(props: SidebarProps) {
    const {} = props
    const [expandedFolders, setExpandedFolders] = useState<ExpandedFoldersState>({
        src: true,
        server: true,
        settings: true,
        "src/core": true,
        "src/core/types": true,
        "src/lib": true,
        "src/lib/aspects": true,
        "src/lib/parsers": false,
        "src/lib/schemas": true,
        "src/util": true,
        "server/templates": true,
    })

    const toggleFolder = (folder: string): void => {
        setExpandedFolders((prev) => ({
            ...prev,
            [folder]: !prev[folder],
        }))
    }

    return (
        <div className="pt-3 flex-1 overflow-y-auto">
            <div className="pt-3 border-t border-neutral-600/30">
                <div className="group">
                    <button
                        onClick={() => toggleFolder("server")}
                        className="w-full flex justify-start items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                    >
                        <svg
                            className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${expandedFolders["server"] ? "transform rotate-90" : ""}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                d="M9 5l7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
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
                        <span>server</span>
                    </button>

                    {expandedFolders["server"] && (
                        <div>
                            <a
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
                                <span>__init__.py</span>
                            </a>
                            <a
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
                                <span>__main__.py</span>
                            </a>
                            <a
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
                                <span>routes.py</span>
                            </a>
                            <a
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
                                <span>server.py</span>
                            </a>

                            {/* templates folder */}
                            <div className="group">
                                <button
                                    onClick={() => toggleFolder("server/templates")}
                                    className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                                >
                                    <svg
                                        className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${expandedFolders["server/templates"] ? "transform rotate-90" : ""}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
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
                                    <span>templates</span>
                                </button>

                                {expandedFolders["server/templates"] && (
                                    <div className="ml-6">
                                        <a
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
                                            <span>cal.html</span>
                                        </a>
                                        <a
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
                                            <span>input.html</span>
                                        </a>
                                        <a
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
                                            <span>messages.html</span>
                                        </a>
                                        <a
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
                                            <span>root.html</span>
                                        </a>
                                        <a
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
                                            <span>test.html</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="group">
                    <button
                        onClick={() => toggleFolder("settings")}
                        className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                    >
                        <svg
                            className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${
                                expandedFolders["settings"] ? "transform rotate-90" : ""
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                d="M9 5l7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
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
                        <span>settings</span>
                    </button>

                    {expandedFolders["settings"] && (
                        <div className="ml-6">
                            <a
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
                                <span>continuity.json</span>
                            </a>
                            <a
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
                                <span>library.json</span>
                            </a>
                        </div>
                    )}
                </div>

                <div className="group">
                    <button
                        onClick={() => toggleFolder("src")}
                        className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                    >
                        <svg
                            className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${expandedFolders["src"] ? "transform rotate-90" : ""}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                d="M9 5l7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
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
                        <span>src</span>
                    </button>

                    {expandedFolders["src"] && (
                        <div className="ml-6">
                            <a
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
                                <span>__init__.py</span>
                            </a>
                            <a
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
                                <span>__main__.py</span>
                            </a>

                            {/* core folder */}
                            <div className="group">
                                <button
                                    onClick={() => toggleFolder("src/core")}
                                    className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                                >
                                    <svg
                                        className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${expandedFolders["src/core"] ? "transform rotate-90" : ""}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
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
                                    <span>core</span>
                                </button>

                                {expandedFolders["src/core"] && (
                                    <div className="ml-6">
                                        <a
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
                                            <span>continuity.py</span>
                                        </a>

                                        {/* types folder */}
                                        <div className="group">
                                            <button
                                                onClick={() =>
                                                    toggleFolder("src/core/types")
                                                }
                                                className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                                            >
                                                <svg
                                                    className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${expandedFolders["src/core/types"] ? "transform rotate-90" : ""}`}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        d="M9 5l7 7-7 7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
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
                                                <span>types</span>
                                            </button>

                                            {expandedFolders["src/core/types"] && (
                                                <div className="ml-6">
                                                    <a
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
                                                        <span>aspects.py</span>
                                                    </a>
                                                    <a
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
                                                        <span>constructs.py</span>
                                                    </a>
                                                    <a
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
                                                        <span>models.py</span>
                                                    </a>
                                                    <a
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
                                                        <span>schemas.py</span>
                                                    </a>
                                                    <a
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
                                                        <span>signals.py</span>
                                                    </a>
                                                    <a
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
                                                        <span>traits.py</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* lib folder */}
                            <div className="group">
                                <button
                                    onClick={() => toggleFolder("src/lib")}
                                    className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                                >
                                    <svg
                                        className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${expandedFolders["src/lib"] ? "transform rotate-90" : ""}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
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
                                    <span>lib</span>
                                </button>

                                {expandedFolders["src/lib"] && (
                                    <div className="ml-6">
                                        {/* aspects folder */}
                                        <div className="group">
                                            <button
                                                onClick={() =>
                                                    toggleFolder("src/lib/aspects")
                                                }
                                                className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                                            >
                                                <svg
                                                    className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${expandedFolders["src/lib/aspects"] ? "transform rotate-90" : ""}`}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        d="M9 5l7 7-7 7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
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
                                                <span>aspects</span>
                                            </button>

                                            {expandedFolders["src/lib/aspects"] && (
                                                <div className="ml-6">
                                                    <a
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
                                                        <span>intstructions.py</span>
                                                    </a>
                                                    <a
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
                                                        <span>outputs.py</span>
                                                    </a>
                                                    <a
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
                                                        <span>traits.py</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        <a
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
                                            <span>factory.py</span>
                                        </a>
                                        <a
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
                                            <span>library.py</span>
                                        </a>

                                        {/* parsers folder */}
                                        <div className="group">
                                            <button
                                                onClick={() =>
                                                    toggleFolder("src/lib/parsers")
                                                }
                                                className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                                            >
                                                <svg
                                                    className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${expandedFolders["src/lib/parsers"] ? "transform rotate-90" : ""}`}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        d="M9 5l7 7-7 7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
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
                                                <span>parsers</span>
                                            </button>

                                            {expandedFolders["src/lib/parsers"] && (
                                                <div className="ml-6">
                                                    <a
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
                                                        <span>parsers.py</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        {/* schemas folder */}
                                        <div className="group">
                                            <button
                                                onClick={() =>
                                                    toggleFolder("src/lib/schemas")
                                                }
                                                className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                                            >
                                                <svg
                                                    className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${expandedFolders["src/lib/schemas"] ? "transform rotate-90" : ""}`}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        d="M9 5l7 7-7 7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
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
                                                <span>schemas</span>
                                            </button>

                                            {expandedFolders["src/lib/schemas"] && (
                                                <div className="ml-6">
                                                    <a
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
                                                        <span>models.py</span>
                                                    </a>
                                                    <a
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
                                                        <span>serializers.py</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* util folder */}
                            <div className="group">
                                <button
                                    onClick={() => toggleFolder("src/util")}
                                    className="w-full flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                                >
                                    <svg
                                        className={`mr-2 h-3.5 w-3.5 opacity-70 transition-transform ${expandedFolders["src/util"] ? "transform rotate-90" : ""}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
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
                                    <span>util</span>
                                </button>

                                {expandedFolders["src/util"] && (
                                    <div className="ml-6">
                                        <a
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
                                            <span>exceptions.py</span>
                                        </a>
                                        <a
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
                                            <span>helpers.py</span>
                                        </a>
                                        <a
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
                                            <span>typing.py</span>
                                        </a>
                                        <a
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
                                            <span>utils.py</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export { FileItem }
