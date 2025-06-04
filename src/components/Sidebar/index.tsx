"use client"

import React from "react"
import FileTree from "./FileTree"

interface SidebarProps {
    sidebarType?: string
}

export default function Sidebar(props: SidebarProps) {
    const {} = props

    return (
        <div className="flex flex-col gap-y-1 h-screen w-72 border-0 border-r border-neutral-600/40 bg-[#1d1d1d] p-3 text-neutral-300/70">
            <div className="px-3 py-2 flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="font-medium text-sm flex items-center">
                        Scint Labs
                    </h1>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <a
                    href="#"
                    className="flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                >
                    <svg
                        className="mr-2 h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>Inbox</span>
                </a>
                <a
                    href="#"
                    className="flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                >
                    <svg
                        className="mr-2 h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>Library</span>
                </a>
                <a
                    href="#"
                    className="flex items-center px-2 py-1 text-sm rounded-lg bg-neutral-700/30 text-white"
                >
                    <svg
                        className="mr-2 h-3.5 w-3.5 opacity-60"
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
                    <span>Projects</span>
                </a>
                <a
                    href="#"
                    className="flex items-center px-2 py-1 text-sm rounded hover:bg-neutral-700/30"
                >
                    <svg
                        className="mr-2 h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>Tasks</span>
                </a>
            </div>
            <FileTree />
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
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}
