import React, { useState } from "react"
import { CircleNotch, X, ArrowsOut, DotsThree } from "phosphor-react"
import { TaskData, TaskStatus, PriorityLevel, TaskType } from "@/types/project"

interface NewTaskProps {
    projectId: string
    reporterId: string
    initialStatus?: TaskStatus
    onSubmit: (taskData: TaskData) => void
    onClose: () => void
}

function NewTask(props: NewTaskProps) {
    const {
        projectId,
        reporterId,
        initialStatus = "Backlog",
        onSubmit,
        onClose,
    } = props

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState<TaskStatus>(initialStatus)
    const [priority, setPriority] = useState<PriorityLevel>("None")
    const [assigneeId, setAssigneeId] = useState<string | undefined>("tim")
    const [taskType, setTaskType] = useState<TaskType>("Feature")
    const [createMore, setCreateMore] = useState(false)

    const handleSubmit = () => {
        const newTask: TaskData = {
            id: `task-${Date.now()}`,
            projectId,
            title,
            description,
            type: taskType,
            status,
            priority,
            assigneeId,
            reporterId,
            createdAt: new Date(),
            subtaskIds: [],
            labels: [],
            attachments: [],
            comments: [],
            dependencies: [],
            timeEntries: [],
        }

        onSubmit(newTask)

        if (!createMore) {
            onClose()
        } else {
            setTitle("")
            setDescription("")
        }
    }

    return (
        <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 shadow-xl max-w-3xl w-full text-gray-200">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="text-orange-500">
                        <X size={18} weight="bold" />
                    </div>
                    <span className="text-gray-300 font-medium">Project</span>
                    <span className="text-gray-500">›</span>
                    <span className="text-gray-300">New task</span>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-gray-200">
                        Save as draft
                    </button>
                    <button className="text-gray-400 hover:text-gray-200">
                        <ArrowsOut size={20} />
                    </button>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-200"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Issue title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-transparent text-xl text-gray-200 border-b border-gray-800 pb-2 mb-4 focus:outline-none focus:border-gray-600 placeholder-gray-600"
                />
                <textarea
                    placeholder="Add description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-transparent text-gray-300 focus:outline-none placeholder-gray-600 resize-none min-h-[100px]"
                />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                <button
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700"
                    onClick={() => setStatus("Backlog")}
                >
                    <CircleNotch size={16} />
                    <span>{status}</span>
                </button>

                <button
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700"
                    onClick={() => setPriority(priority === "None" ? "Medium" : "None")}
                >
                    <span className="text-gray-500">---</span>
                    <span>Priority: {priority}</span>
                </button>

                <button
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700"
                    onClick={() => setAssigneeId(assigneeId ? undefined : "tim")}
                >
                    <div className="w-4 h-4 rounded-full bg-blue-400 flex-shrink-0"></div>
                    <span>{assigneeId || "Unassigned"}</span>
                </button>

                <button
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700"
                    onClick={() =>
                        setTaskType(taskType === "Feature" ? "Bug" : "Feature")
                    }
                >
                    <span className="text-gray-500">
                        <CircleNotch size={16} />
                    </span>
                    <span>Type: {taskType}</span>
                </button>

                <button className="px-3 py-1.5 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700">
                    <span className="text-gray-500">
                        <CircleNotch size={16} />
                    </span>
                </button>

                <button className="px-3 py-1.5 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700">
                    <span className="text-gray-500">
                        <CircleNotch size={16} />
                    </span>
                </button>

                <button className="px-3 py-1.5 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700">
                    <DotsThree size={16} />
                </button>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div
                            className={`w-10 h-5 rounded-full ${createMore ? "bg-blue-500" : "bg-gray-700"} relative transition-colors`}
                            onClick={() => setCreateMore(!createMore)}
                        >
                            <div
                                className={`absolute w-4 h-4 rounded-full bg-white top-0.5 transition-transform ${createMore ? "translate-x-5" : "translate-x-0.5"}`}
                            ></div>
                        </div>
                        <span className="text-gray-300">Create more</span>
                    </label>

                    <button
                        onClick={handleSubmit}
                        disabled={!title.trim()}
                        className={`px-4 py-2 rounded-md text-white ${title.trim() ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 cursor-not-allowed"}`}
                    >
                        Create task
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewTask
