"use client"

import React from "react"

function hashString(str: string) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i)
        hash |= 0 // Convert to 32bit integer
    }
    return hash
}

function seededRandom(seed: number) {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
}

interface Task {
    id: string
    type: "development" | "research" | "writing" | "analysis" | "data"
    title: string
    description: string
    status: "running" | "paused" | "completed" | "error"
    progress: number // 0-100
    timeElapsed: string
    size: "small" | "medium" | "large"
}

const taskTypeColors: Record<Task["type"], string> = {
    development: "border-blue-200/5 bg-neutral-500/5",
    research: "border-purple-200/5 bg-neutral-500/5",
    writing: "border-green-200/5 bg-neutral-500/5",
    analysis: "border-amber-200/5 bg-neutral-500/5",
    data: "border-rose-200/5 bg-neutral-500/5",
}

const TaskIcon: React.FC<{ type: Task["type"] }> = ({ type }) => {
    switch (type) {
        case "development":
            return (
                <svg
                    className="w-4 h-4 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                </svg>
            )
        case "research":
            return (
                <svg
                    className="w-4 h-4 text-purple-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            )
        case "writing":
            return (
                <svg
                    className="w-4 h-4 text-green-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                </svg>
            )
        case "analysis":
            return (
                <svg
                    className="w-4 h-4 text-amber-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                </svg>
            )
        case "data":
            return (
                <svg
                    className="w-4 h-4 text-rose-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z M9 3v4 M15 3v4 M3 11h18"
                    />
                </svg>
            )
    }
}

const sizeClasses = {
    small: "w-72 h-32",
    medium: "w-72 h-48",
    large: "w-72 h-48",
}

const tasks: Task[] = [
    {
        id: "task-1",
        type: "development",
        title: "Refactoring Auth Module",
        description:
            "Analyzing and refactoring authentication system for better performance",
        status: "running",
        progress: 45,
        timeElapsed: "1h 23m",
        size: "medium",
    },
    {
        id: "task-2",
        type: "research",
        title: "ML Literature Review",
        description:
            "Gathering and summarizing recent papers on transformer architecture improvements",
        status: "running",
        progress: 68,
        timeElapsed: "2h 47m",
        size: "large",
    },
    {
        id: "task-3",
        type: "writing",
        title: "Blog Post Draft",
        description: "Creating first draft of technical blog post on React performance",
        status: "paused",
        progress: 30,
        timeElapsed: "45m",
        size: "small",
    },
    {
        id: "task-4",
        type: "analysis",
        title: "Performance Metrics",
        description:
            "Analyzing application metrics and identifying optimization opportunities",
        status: "running",
        progress: 82,
        timeElapsed: "3h 12m",
        size: "medium",
    },
    {
        id: "task-8",
        type: "research",
        title: "Port Graphs",
        description: "Deep research on architectures utilizing port graphs",
        status: "running",
        progress: 18,
        timeElapsed: "8m",
        size: "large",
    },
    {
        id: "task-5",
        type: "data",
        title: "Data Preprocessing",
        description: "Cleaning and normalizing dataset for sentiment analysis model",
        status: "completed",
        progress: 100,
        timeElapsed: "1h 08m",
        size: "small",
    },
    {
        id: "task-9",
        type: "writing",
        title: "Invoice",
        description: "Generate an invoice for CaseReviewer",
        status: "paused",
        progress: 66,
        timeElapsed: "3m",
        size: "small",
    },
]

const TaskPanel: React.FC<{ task: Task }> = ({ task }) => {
    return (
        <div
            className={`
        ${sizeClasses[task.size]}
        ${taskTypeColors[task.type]}
        backdrop-blur-md
        rounded-lg shadow-lg
        border border-neutral-400/10
        transition-all duration-200 ease-in-out
        hover:shadow-xl hover:scale-[1.01]
        flex flex-col
        group
        max-w-72
        overflow-hidden
        my-4
      `}
        >
            <div className="overflow-y-scroll px-3 py-2 flex items-center justify-between border-b border-neutral-700/40">
                <div className="flex items-center">
                    <TaskIcon type={task.type} />
                    <h3 className="ml-2 text-sm font-medium text-white">
                        {task.title}
                    </h3>
                </div>
                <div className="flex items-center space-x-1 opacity-60 group-hover:opacity-100">
                    {task.status === "running" && (
                        <button className="p-1 rounded-full hover:bg-white/10">
                            <svg
                                className="w-3 h-3"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <rect x="6" y="4" width="4" height="16" />
                                <rect x="14" y="4" width="4" height="16" />
                            </svg>
                        </button>
                    )}
                    {task.status === "paused" && (
                        <button className="p-1 rounded-full hover:bg-white/10">
                            <svg
                                className="w-3 h-3"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <polygon points="5,3 19,12 5,21" />
                            </svg>
                        </button>
                    )}
                    <button className="p-1 rounded-full hover:bg-white/10">
                        <svg
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex-1 p-3 flex flex-col w-96">
                <p className="text-xs text-neutral-400 line-clamp-1 mb-2 max-w-72 pr-5 overflow-ellipsis h-4">
                    {task.description}
                </p>

                {task.size !== "small" && (
                    <div className="mt-auto">
                        <div className="h-12 mb-2 flex items-end w-full">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1 mx-0.5 rounded-t-sm ${
                                        task.type === "development"
                                            ? "bg-blue-400/70"
                                            : task.type === "research"
                                              ? "bg-purple-400/70"
                                              : task.type === "writing"
                                                ? "bg-green-400/70"
                                                : task.type === "analysis"
                                                  ? "bg-amber-400/70"
                                                  : "bg-rose-400/70"
                                    }`}
                                    style={{
                                        height: `${Math.max(
                                            15,
                                            Math.min(
                                                100,
                                                seededRandom(hashString(task.id) + i) * 100,
                                            ),
                                        )}%`,
                                        opacity:
                                            i > 8 && task.status === "paused"
                                                ? 0.3
                                                : undefined,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Progress and time */}
                <div
                    className={`mt-${task.size === "small" ? "auto" : "2"} text-xs space-y-1`}
                >
                    <div className="flex justify-between text-neutral-400">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                    </div>
                    <div className="w-[70%] bg-neutral-700/10 rounded-full h-1">
                        <div
                            className={`h-1 rounded-full ${
                                task.type === "development"
                                    ? "bg-blue-500/70"
                                    : task.type === "research"
                                      ? "bg-purple-500/70"
                                      : task.type === "writing"
                                        ? "bg-green-500/70"
                                        : task.type === "analysis"
                                          ? "bg-amber-500/70"
                                          : "bg-rose-500/70"
                            }`}
                            style={{ width: `${task.progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Panels({ className = "" }: { className?: string }) {
    return (
        <div className={`flex flex-col h-screen max-w-fit text-neutral-300/70 relative overflow-hidden w-80 ${className}`}>
            <div className="w-96 px-2 space-y-6 overflow-y-scroll">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className="relative"
                        style={{
                            animation: `float ${2 + seededRandom(hashString(task.id)) * 2}s ease-in-out infinite alternate`,
                        }}
                    >
                        <TaskPanel task={task} />
                    </div>
                ))}
            </div>

            <style jsx global>{`
                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    100% {
                        transform: translateY(-8px);
                    }
                }

                /* Stagger the animations */
                .absolute > div:nth-child(1) {
                    animation-delay: 0s;
                }
                .absolute > div:nth-child(2) {
                    animation-delay: 0.2s;
                }
                .absolute > div:nth-child(3) {
                    animation-delay: 0.4s;
                }
                .absolute > div:nth-child(4) {
                    animation-delay: 0.6s;
                }
                .absolute > div:nth-child(5) {
                    animation-delay: 0.8s;
                }
            `}</style>
        </div>
    )
}
