import { useState } from "react"
import { TaskData, TaskStatus, TaskType, PriorityLevel } from "@/types/project"
import NewTask from "@/components/NewTask"
import { DotsThreeOutline, Plus } from "phosphor-react"

export type TagType = TaskType | "Messaging"

interface BoardColumn {
    id: string
    title: string
    status: TaskStatus
}

const tagColors: Record<TagType, string> = {
    Feature: "bg-blue-500/20 text-blue-500",
    Bug: "bg-red-500/20 text-red-500",
    Messaging: "bg-green-600/20 text-green-600",
    Documentation: "bg-blue-400/20 text-blue-400",
    Test: "bg-yellow-500/20 text-yellow-500",
    Refactor: "bg-indigo-500/20 text-indigo-500",
    Enhancement: "bg-teal-500/20 text-teal-500",
    Research: "bg-violet-500/20 text-violet-500",
}

const columnColors: Record<string, { bg: string; text: string }> = {
    Backlog: { bg: "bg-gray-500", text: "text-gray-500" },
    Todo: { bg: "bg-blue-500", text: "text-blue-500" },
    "In Progress": { bg: "bg-orange-500", text: "text-orange-500" },
    "In Review": { bg: "bg-purple-500", text: "text-purple-500" },
    Done: { bg: "bg-green-500", text: "text-green-500" },
    Blocked: { bg: "bg-red-500", text: "text-red-500" },
}

interface TaskBoardProps {
    tasks: TaskData[]
    projectId: string
    currentUserId: string
    onTaskCreate: (task: TaskData) => void
    onTaskUpdate?: (taskId: string, updates: Partial<TaskData>) => void
}

function TaskBoard(props: TaskBoardProps) {
    const { tasks, projectId, currentUserId, onTaskCreate } = props
    const [showNewTaskForm, setShowNewTaskForm] = useState(false)
    const [activeColumn, setActiveColumn] = useState<string | null>(null)

    const boardColumns: BoardColumn[] = [
        { id: "backlog", title: "Backlog", status: "Backlog" },
        { id: "todo", title: "Todo", status: "Todo" },
        { id: "in-progress", title: "In Progress", status: "In Progress" },
        { id: "in-review", title: "In Review", status: "In Review" },
        { id: "done", title: "Done", status: "Done" },
    ]

    const tasksByStatus = boardColumns.map((column) => {
        const columnTasks = tasks.filter((task) => task.status === column.status)
        return {
            ...column,
            itemCount: columnTasks.length,
            items: columnTasks,
        }
    })

    const handleAddItemClick = (columnId: string) => {
        setActiveColumn(columnId)
        setShowNewTaskForm(true)
    }

    const handleTaskCreate = (task: TaskData) => {
        onTaskCreate(task)
        setShowNewTaskForm(false)
    }

    const getPriorityStyle = (priority: PriorityLevel): string => {
        switch (priority) {
            case "Urgent":
                return "bg-red-500/20 text-red-500"
            case "High":
                return "bg-orange-500/20 text-orange-500"
            case "Medium":
                return "bg-yellow-500/20 text-yellow-500"
            case "Low":
                return "bg-blue-500/20 text-blue-500"
            default:
                return "bg-gray-500/20 text-gray-500"
        }
    }

    return (
        <div className="flex flex-col h-full">
            {showNewTaskForm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <NewTask
                        onClose={() => setShowNewTaskForm(false)}
                        onSubmit={handleTaskCreate}
                        projectId={projectId}
                        reporterId={currentUserId}
                        initialStatus={
                            activeColumn
                                ? boardColumns.find((col) => col.id === activeColumn)
                                      ?.status || "Backlog"
                                : "Backlog"
                        }
                    />
                </div>
            )}

            <div className="flex gap-4 p-4 bg-gray-950 text-white overflow-x-auto">
                {tasksByStatus.map((column) => (
                    <div key={column.id} className="w-80 flex-shrink-0">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-3 h-3 rounded-full ${columnColors[column.title].bg}`}
                                ></div>
                                <h2
                                    className={`font-medium ${columnColors[column.title].text}`}
                                >
                                    {column.title}
                                </h2>
                                <span className="text-sm text-gray-400 ml-1">
                                    {column.itemCount}
                                </span>
                            </div>
                            <button className="text-gray-400 hover:text-white">
                                <DotsThreeOutline size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-3">
                            {column.items.map((task) => (
                                <div
                                    key={task.id}
                                    className="bg-gray-900 rounded-lg p-3 border border-gray-800 hover:border-gray-700 cursor-pointer"
                                >
                                    <div className="flex items-center justify-between mb-1.5">
                                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                                            <div className="w-4 h-4 flex items-center justify-center border border-gray-700 rounded-full">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                                            </div>
                                            <span>{task.id.split("-")[0]}</span>
                                        </div>

                                        {task.priority !== "None" && (
                                            <span
                                                className={`text-xs px-2 py-0.5 rounded-full ${getPriorityStyle(task.priority)}`}
                                            >
                                                {task.priority}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="mb-2 font-medium">{task.title}</h3>

                                    <div className="flex flex-wrap gap-1.5 mb-2">
                                        <span
                                            className={`text-xs px-2 py-0.5 rounded-full ${tagColors[task.type]}`}
                                        >
                                            {task.type}
                                        </span>

                                        {task.labels &&
                                            task.labels.length > 0 &&
                                            task.labels.map((label, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-gray-300"
                                                >
                                                    {label}
                                                </span>
                                            ))}
                                    </div>

                                    {task.assigneeId && (
                                        <div className="flex items-center mt-2">
                                            <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-xs text-white">
                                                {task.assigneeId
                                                    .charAt(0)
                                                    .toUpperCase()}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <button
                                className="flex items-center justify-center gap-1 text-gray-400 hover:text-white py-3 border border-dashed border-gray-800 rounded-lg hover:border-gray-700"
                                onClick={() => handleAddItemClick(column.id)}
                            >
                                <Plus size={16} />
                                <span>Add item</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaskBoard
