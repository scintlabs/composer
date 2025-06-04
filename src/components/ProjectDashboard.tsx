"use client"

import React, { JSX } from "react"
import { format } from "date-fns"

interface Project {
    name: string
    description: string
    lastUpdated: Date
    contributors: Contributor[]
    progress: number
}

interface Contributor {
    id: string
    name: string
    avatar: string
    role: string
}

interface RecentItem {
    id: string
    title: string
    path: string
    type: "file" | "task"
    category: "development" | "research" | "writing" | "analysis" | "data"
    lastModified: Date
    modifiedBy: Contributor
}

interface ProjectTask {
    id: string
    title: string
    status: "not_started" | "in_progress" | "review" | "completed"
    dueDate: Date
    assignee: Contributor
    priority: "low" | "medium" | "high"
    tags: string[]
    dependencies: string[]
}

const categoryColors: Record<RecentItem["category"], string> = {
    development: "bg-neutral-500/5 border-neutral-400/10 text-blue-300",
    research: "bg-neutral-500/5 border-neutral-400/10 text-purple-300",
    writing: "bg-neutral-500/5 border-neutral-400/10 text-green-300",
    analysis: "bg-neutral-500/5 border-neutral-400/10 text-amber-300",
    data: "bg-neutral-500/5 border-neutral-400/10 text-rose-300",
}

const priorityIndicators: Record<ProjectTask["priority"], string> = {
    low: "bg-neutral-500",
    medium: "bg-amber-500",
    high: "bg-red-500",
}

const projectData: Project = {
    name: "Scint Labs NLP Engine",
    description:
        "Next-generation natural language processing framework with advanced contextual awareness",
    lastUpdated: new Date(2025, 2, 15),
    contributors: [
        {
            id: "u1",
            name: "Alex Morgan",
            avatar: "/avatars/alex.jpg",
            role: "Lead Developer",
        },
        {
            id: "u2",
            name: "Sam Taylor",
            avatar: "/avatars/sam.jpg",
            role: "ML Engineer",
        },
        {
            id: "u3",
            name: "Jamie Chen",
            avatar: "/avatars/jamie.jpg",
            role: "UX Designer",
        },
        {
            id: "u4",
            name: "Riley Smith",
            avatar: "/avatars/riley.jpg",
            role: "Data Scientist",
        },
    ],
    progress: 68,
}

const recentItems: RecentItem[] = [
    {
        id: "f1",
        title: "context_processor.py",
        path: "/src/core/nlp/context_processor.py",
        type: "file",
        category: "development",
        lastModified: new Date(2025, 2, 14, 15, 30),
        modifiedBy: projectData.contributors[0],
    },
    {
        id: "t1",
        title: "Sentiment Analysis Model",
        path: "/tasks/sentiment-analysis",
        type: "task",
        category: "research",
        lastModified: new Date(2025, 2, 14, 14, 45),
        modifiedBy: projectData.contributors[3],
    },
    {
        id: "f2",
        title: "encoder_architecture.md",
        path: "/docs/architecture/encoder_architecture.md",
        type: "file",
        category: "writing",
        lastModified: new Date(2025, 2, 14, 11, 20),
        modifiedBy: projectData.contributors[1],
    },
    {
        id: "f3",
        title: "tokenizer.py",
        path: "/src/lib/tokenizer.py",
        type: "file",
        category: "development",
        lastModified: new Date(2025, 2, 13, 16, 15),
        modifiedBy: projectData.contributors[0],
    },
    {
        id: "t2",
        title: "Performance Metrics",
        path: "/tasks/performance-metrics",
        type: "task",
        category: "analysis",
        lastModified: new Date(2025, 2, 13, 10, 30),
        modifiedBy: projectData.contributors[3],
    },
    {
        id: "f4",
        title: "training_data.csv",
        path: "/data/training_data.csv",
        type: "file",
        category: "data",
        lastModified: new Date(2025, 2, 12, 9, 45),
        modifiedBy: projectData.contributors[3],
    },
]

const projectTasks: ProjectTask[] = [
    {
        id: "task1",
        title: "Implement context-aware embeddings",
        status: "in_progress",
        dueDate: new Date(2025, 2, 20),
        assignee: projectData.contributors[0],
        priority: "high",
        tags: ["core", "ml", "embeddings"],
        dependencies: [],
    },
    {
        id: "task2",
        title: "Optimize transformer architecture",
        status: "not_started",
        dueDate: new Date(2025, 2, 25),
        assignee: projectData.contributors[1],
        priority: "medium",
        tags: ["architecture", "optimization"],
        dependencies: ["task1"],
    },
    {
        id: "task3",
        title: "Design UX for semantic playground",
        status: "review",
        dueDate: new Date(2025, 2, 18),
        assignee: projectData.contributors[2],
        priority: "medium",
        tags: ["ux", "design"],
        dependencies: [],
    },
    {
        id: "task4",
        title: "Train initial model on corpus",
        status: "completed",
        dueDate: new Date(2025, 2, 10),
        assignee: projectData.contributors[3],
        priority: "high",
        tags: ["ml", "training"],
        dependencies: [],
    },
    {
        id: "task5",
        title: "Implement tokenization pipeline",
        status: "completed",
        dueDate: new Date(2025, 2, 8),
        assignee: projectData.contributors[0],
        priority: "high",
        tags: ["core", "pipeline"],
        dependencies: [],
    },
    {
        id: "task6",
        title: "Create evaluation framework",
        status: "in_progress",
        dueDate: new Date(2025, 2, 22),
        assignee: projectData.contributors[3],
        priority: "medium",
        tags: ["testing", "evaluation"],
        dependencies: ["task4"],
    },
    {
        id: "task7",
        title: "Document API endpoints",
        status: "not_started",
        dueDate: new Date(2025, 2, 28),
        assignee: projectData.contributors[1],
        priority: "low",
        tags: ["documentation", "api"],
        dependencies: ["task1", "task2"],
    },
]

// README content
const readmeContent = `
# Scint

## Overview

This project aims to create a highly efficient NLP engine that understands context beyond simple token recognition. By implementing a hybrid architecture that combines transformers with novel attention mechanisms, we achieve state-of-the-art performance on a variety of language tasks.

## Key Features

- **Contextual Awareness**: Deep understanding of semantic relationships between entities
- **Efficient Processing**: Optimized for low-latency inference even with complex inputs
- **Extensible Architecture**: Modular design that allows for easy customization
- **Multi-domain Support**: Pre-trained on diverse corpora for broad applicability
- **Scalable Implementation**: Works from embedded devices to large-scale deployments

## Getting Started

### Installation

\`\`\`bash
pip install scint-nlp
\`\`\`

### Basic Usage

\`\`\`python
from scint import NLPEngine

engine = NLPEngine()
results = engine.analyze("Your text here with complex semantics")
context_map = results.get_context_map()
entities = results.get_entities()
\`\`\`

## Architecture

The core architecture consists of:

1. **Tokenization Layer**: Custom tokenization with semantic awareness
2. **Embedding Layer**: Context-sensitive embedding generation
3. **Transformer Stack**: Modified transformer with extended attention mechanisms
4. **Context Processor**: Novel component for maintaining extended context
5. **Output Projections**: Task-specific output adapters

## Roadmap

- [x] Core architecture implementation
- [x] Basic training pipeline
- [ ] Advanced context understanding modules
- [ ] Multi-language support
- [ ] Domain-specific optimizations
- [ ] Mobile/edge deployment optimizations

## Contributing

Contributions are welcome! Please check out our [contribution guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
`

const RecentItemCard: React.FC<{ item: RecentItem }> = ({ item }) => {
    const timeAgo = () => {
        const now = new Date()
        const diffHours = Math.floor(
            (now.getTime() - item.lastModified.getTime()) / (1000 * 60 * 60)
        )

        if (diffHours < 1) return "Just now"
        if (diffHours < 24) return `${diffHours}h ago`
        return `${Math.floor(diffHours / 24)}d ago`
    }

    return (
        <div
            className={`rounded-lg ${categoryColors[item.category]} bg-opacity-10 border border-opacity-20 p-4 h-32 flex flex-col justify-between transition-all duration-200 hover:scale-[1.02] hover:shadow-md hover:shadow-black/20`}
        >
            <div>
                <div className="flex items-center mb-2">
                    {item.type === "file" ? (
                        <svg
                            className="w-5 h-5 mr-2 opacity-70"
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
                    ) : (
                        <svg
                            className="w-5 h-5 mr-2 opacity-70"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                    <span className="truncate font-medium">{item.title}</span>
                </div>
                <p className="text-xs opacity-60 truncate">{item.path}</p>
            </div>
            <div className="flex items-center mt-2">
                <div className="w-5 h-5 rounded-full bg-neutral-800/50  border border-neutral-600/40  flex items-center justify-center overflow-hidden">
                    <span className="text-xs">{item.modifiedBy.name.charAt(0)}</span>
                </div>
                <span className="text-xs ml-2 opacity-70">{timeAgo()}</span>
            </div>
        </div>
    )
}

const ProjectTasksSection: React.FC<{ tasks: ProjectTask[] }> = ({ tasks }) => {
    const tasksByStatus = tasks.reduce(
        (acc, task) => {
            if (!acc[task.status]) acc[task.status] = []
            acc[task.status].push(task)
            return acc
        },
        {} as Record<ProjectTask["status"], ProjectTask[]>
    )

    const taskPositions = tasks.reduce(
        (acc, task) => {
            acc[task.id] = { x: 0, y: 0 }
            return acc
        },
        {} as Record<string, { x: number; y: number }>
    )

    const updateTaskPosition = (taskId: string, position: { x: number; y: number }) => {
        taskPositions[taskId] = position
    }

    return (
        <div>
            <div className="flex gap-4 w-full">
                <div className="bg-neutral-900/40 rounded-lg w-1/4">
                    <h3 className="text-sm font-medium text-neutral-400 mb-3 flex items-center">
                        Not Started
                        <span className="ml-2 text-xs bg-neutral-700/50 px-1.5 rounded-full">
                            {tasksByStatus.not_started?.length || 0}
                        </span>
                    </h3>
                    <div className="flex flex-col gap-4">
                        {tasksByStatus.not_started?.map((task) => (
                            <div
                                key={task.id}
                                className="bg-neutral-800/50  p-3 rounded-lg border border-neutral-600/40  shadow-sm hover:shadow-md transition-shadow"
                                ref={(el) => {
                                    if (el) {
                                        const rect = el.getBoundingClientRect()
                                        updateTaskPosition(task.id, {
                                            x: rect.left + rect.width / 2,
                                            y: rect.top + rect.height / 2,
                                        })
                                    }
                                }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-sm font-medium text-white">
                                        {task.title}
                                    </h4>
                                    <div
                                        className={`w-2 h-2 rounded-full ${priorityIndicators[task.priority]}`}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-xs text-neutral-400">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full bg-neutral-700/50 mr-1 flex items-center justify-center overflow-hidden">
                                            <span className="text-xs">
                                                {task.assignee.name.charAt(0)}
                                            </span>
                                        </div>
                                        <span>{task.assignee.name.split(" ")[0]}</span>
                                    </div>
                                    <span>{format(task.dueDate, "MMM d")}</span>
                                </div>
                                {task.tags.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-1">
                                        {task.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-1.5 py-0.5 bg-neutral-700/50 rounded-full text-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-neutral-900/40 rounded-lg w-1/4">
                    <h3 className="text-sm font-medium mb-3 flex items-center">
                        In Progress
                        <span className="ml-2 text-xs bg-neutral-700/50 px-1.5 rounded-full">
                            {tasksByStatus.in_progress?.length || 0}
                        </span>
                    </h3>
                    <div className="flex flex-col gap-4">
                        {tasksByStatus.in_progress?.map((task) => (
                            <div
                                key={task.id}
                                className="bg-neutral-800/50  p-3 rounded-lg border border-neutral-600/40  shadow-sm hover:shadow-md transition-shadow"
                                ref={(el) => {
                                    if (el) {
                                        const rect = el.getBoundingClientRect()
                                        updateTaskPosition(task.id, {
                                            x: rect.left + rect.width / 2,
                                            y: rect.top + rect.height / 2,
                                        })
                                    }
                                }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-sm font-medium text-white">
                                        {task.title}
                                    </h4>
                                    <div
                                        className={`w-2 h-2 rounded-full ${priorityIndicators[task.priority]}`}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-xs text-neutral-400">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full bg-neutral-700/50 mr-1 flex items-center justify-center overflow-hidden">
                                            <span className="text-xs">
                                                {task.assignee.name.charAt(0)}
                                            </span>
                                        </div>
                                        <span>{task.assignee.name.split(" ")[0]}</span>
                                    </div>
                                    <span>{format(task.dueDate, "MMM d")}</span>
                                </div>
                                {task.tags.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-1">
                                        {task.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-1.5 py-0.5 bg-neutral-700/50 rounded-full text-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-neutral-900/40 rounded-lg w-1/4">
                    <h3 className="text-sm font-medium mb-3 flex items-center">
                        Review
                        <span className="ml-2 text-xs bg-neutral-700/50 px-1.5 rounded-full">
                            {tasksByStatus.review?.length || 0}
                        </span>
                    </h3>
                    <div className="flex flex-col gap-4">
                        {tasksByStatus.review?.map((task) => (
                            <div
                                key={task.id}
                                className="bg-neutral-800/50 p-3 rounded-lg border border-neutral-600/40 shadow-sm hover:shadow-md transition-shadow"
                                ref={(el) => {
                                    if (el) {
                                        const rect = el.getBoundingClientRect()
                                        updateTaskPosition(task.id, {
                                            x: rect.left + rect.width / 2,
                                            y: rect.top + rect.height / 2,
                                        })
                                    }
                                }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-sm font-medium text-white">
                                        {task.title}
                                    </h4>
                                    <div
                                        className={`w-2 h-2 rounded-full ${priorityIndicators[task.priority]}`}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-xs text-neutral-400">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full bg-neutral-700/50 mr-1 flex items-center justify-center overflow-hidden">
                                            <span className="text-xs">
                                                {task.assignee.name.charAt(0)}
                                            </span>
                                        </div>
                                        <span>{task.assignee.name.split(" ")[0]}</span>
                                    </div>
                                    <span>{format(task.dueDate, "MMM d")}</span>
                                </div>
                                {task.tags.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-1">
                                        {task.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-1.5 py-0.5 bg-neutral-700/50 rounded-full text-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-neutral-900/40 rounded-lg w-1/4">
                    <h3 className="text-sm font-medium mb-3 flex items-center">
                        Completed
                        <span className="ml-2 text-xs bg-neutral-700/50 px-1.5 rounded-full">
                            {tasksByStatus.completed?.length || 0}
                        </span>
                    </h3>
                    <div className="flex flex-col gap-4">
                        {tasksByStatus.completed?.map((task) => (
                            <div
                                key={task.id}
                                className="bg-neutral-800/50  p-3 rounded-lg border border-neutral-600/40  shadow-sm hover:shadow-md transition-shadow"
                                ref={(el) => {
                                    if (el) {
                                        const rect = el.getBoundingClientRect()
                                        updateTaskPosition(task.id, {
                                            x: rect.left + rect.width / 2,
                                            y: rect.top + rect.height / 2,
                                        })
                                    }
                                }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-sm font-medium text-white">
                                        {task.title}
                                    </h4>
                                    <div
                                        className={`w-2 h-2 rounded-full ${priorityIndicators[task.priority]}`}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-xs text-neutral-400">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 rounded-full bg-neutral-700/50 mr-1 flex items-center justify-center overflow-hidden">
                                            <span className="text-xs">
                                                {task.assignee.name.charAt(0)}
                                            </span>
                                        </div>
                                        <span>{task.assignee.name.split(" ")[0]}</span>
                                    </div>
                                    <span>{format(task.dueDate, "MMM d")}</span>
                                </div>
                                {task.tags.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-1">
                                        {task.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-1.5 py-0.5 bg-neutral-700/50 rounded-full text-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Markdown: React.FC<{ content: string }> = ({ content }) => {
    const renderMarkdown = (md: string) => {
        const lines = md.split("\n")
        const elements: JSX.Element[] = []
        let codeBlock = false
        let codeContent = ""
        let codeLanguage = ""

        lines.forEach((line, i) => {
            if (line.startsWith("```")) {
                if (!codeBlock) {
                    codeBlock = true
                    codeLanguage = line.slice(3)
                } else {
                    elements.push(
                        <div
                            key={`code-${i}`}
                            className="rounded-lg p-4 my-3 font-mono text-sm overflow-x-auto text-neutral-400"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-neutral-500">
                                    {codeLanguage}
                                </span>
                                <button className="text-xs text-neutral-500 hover:text-neutral-300">
                                    Copy
                                </button>
                            </div>
                            <pre>{codeContent}</pre>
                        </div>
                    )
                    codeBlock = false
                    codeContent = ""
                }
                return
            }

            if (codeBlock) {
                codeContent += line + "\n"
                return
            }

            if (line.startsWith("# ")) {
                elements.push(
                    <h1
                        key={i}
                        className="text-3xl font-bold mt-6 mb-4 text-white hidden"
                    >
                        {line.slice(2)}
                    </h1>
                )
            } else if (line.startsWith("## ")) {
                elements.push(
                    <h2 key={i} className="text-xl font-semibold mt-5 mb-3 text-white">
                        {line.slice(3)}
                    </h2>
                )
            } else if (line.startsWith("### ")) {
                elements.push(
                    <h3 key={i} className="text-lg font-semibold mt-4 mb-2 text-white">
                        {line.slice(4)}
                    </h3>
                )
            }
            // Lists
            else if (line.match(/^- \[[ x]\]/)) {
                const checked = line.includes("- [x]")
                const content = line.replace(/^- \[[ x]\]/, "")
                elements.push(
                    <div key={i} className="flex items-start mt-1">
                        <div
                            className={`w-4 h-4 rounded-lg border ${checked ? "bg-blue-500/5 border-blue-500/50" : "border-neutral-600"} flex items-center justify-center mr-2 mt-0.5`}
                        >
                            {checked && (
                                <svg
                                    className="w-3 h-3 text-blue-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </div>
                        <span className="text-neutral-300">{content}</span>
                    </div>
                )
            } else if (line.startsWith("- ")) {
                elements.push(
                    <li
                        key={i}
                        className="ml-5 mt-1 text-neutral-300 flex items-center"
                    >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-500 mr-2"></span>
                        {line.slice(2)}
                    </li>
                )
            }
            // Regular paragraph
            else if (line.trim() !== "") {
                elements.push(
                    <p key={i} className="my-2 text-neutral-300">
                        {line}
                    </p>
                )
            } else {
                elements.push(<div key={i} className="my-1"></div>)
            }
        })

        return elements
    }

    return (
        <div className="prose prose-invert prose-sm max-w-none py-2">
            {renderMarkdown(content)}
        </div>
    )
}

const ProjectDashboard: React.FC = () => {
    return (
        <div className="flex flex-col w-2/3 h-screen overflow-y-auto text-white bg-[#181818] px-32 py-20 gap-6">
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div>
                            <h1 className="text-4xl mb-4 font-semibold text-white">
                                {projectData.name}
                            </h1>
                            <p className="text-neutral-400 mt-1 pr-6">
                                {projectData.description}
                            </p>
                        </div>
                        <div className="bg-neutral-800/50  px-3 py-1.5 rounded-lg border border-neutral-600/40  flex items-center">
                            <div className="mr-2 flex -space-x-2">
                                {projectData.contributors
                                    .slice(0, 3)
                                    .map((contributor, index) => (
                                        <div
                                            key={contributor.id}
                                            className="w-6 h-6 rounded-full bg-neutral-700/50 border border-neutral-800 flex items-center justify-center overflow-hidden"
                                            style={{ zIndex: 10 - index }}
                                        >
                                            <span className="text-xs">
                                                {contributor.name.charAt(0)}
                                            </span>
                                        </div>
                                    ))}
                                {projectData.contributors.length > 3 && (
                                    <div className="w-6 h-6 rounded-full bg-neutral-700/50 border border-neutral-800 flex items-center justify-center text-xs">
                                        +{projectData.contributors.length - 3}
                                    </div>
                                )}
                            </div>
                            <span className="text-sm">Team</span>
                        </div>

                        <div className="bg-neutral-800/50  px-3 py-1.5 rounded-lg border border-neutral-600/40  flex items-center">
                            <div className="w-20 h-2 bg-neutral-700/50 rounded-full mr-2">
                                <div
                                    className="h-full bg-blue-500 rounded-full"
                                    style={{ width: `${projectData.progress}%` }}
                                ></div>
                            </div>
                            <span className="text-sm">{projectData.progress}%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex items-center text-sm text-neutral-400 mb-3">
                    <svg
                        className="w-4 h-4 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Recently Edited
                </div>
                <div className="grid grid-cols-6 gap-4">
                    {recentItems.map((item) => (
                        <RecentItemCard key={item.id} item={item} />
                    ))}
                </div>
            </div>

            <ProjectTasksSection tasks={projectTasks} />

            <Markdown content={readmeContent} />
        </div>
    )
}

export default ProjectDashboard
