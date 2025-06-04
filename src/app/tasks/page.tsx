"use client"
import { useState } from "react"
import { TaskData } from "@/types/project"
import TaskBoard from "@/components/TaskBoard"

const mockTasks: TaskData[] = [
    {
        id: "task-1",
        projectId: "proj-1",
        title: "Implement login form",
        description: "Create a login form with validation",
        type: "Feature",
        status: "Todo",
        priority: "High",
        assigneeId: "user1",
        reporterId: "user2",
        createdAt: new Date(),
        subtaskIds: [],
        labels: ["frontend", "auth"],
        attachments: [],
        comments: [],
        dependencies: [],
        timeEntries: [],
    },
    {
        id: "task-2",
        projectId: "proj-1",
        title: "Fix navigation bug",
        description: "Navigation links disappear on mobile view",
        type: "Bug",
        status: "In Progress",
        priority: "Medium",
        assigneeId: "user3",
        reporterId: "user1",
        createdAt: new Date(),
        subtaskIds: [],
        labels: ["frontend", "navigation"],
        attachments: [],
        comments: [],
        dependencies: [],
        timeEntries: [],
    },
]

export default function Page() {
    const [tasks, setTasks] = useState<TaskData[]>(mockTasks)

    const handleTaskCreate = (newTask: TaskData) => {
        setTasks([...tasks, newTask])
    }

    const handleTaskUpdate = (taskId: string, updates: Partial<TaskData>) => {
        setTasks(
            tasks.map((task) => (task.id === taskId ? { ...task, ...updates } : task))
        )
    }

    return (
        <div className="min-h-screen bg-gray-950">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-white mb-6">
                    Project Dashboard
                </h1>

                <TaskBoard
                    tasks={tasks}
                    projectId="proj-1"
                    currentUserId="user1"
                    onTaskCreate={handleTaskCreate}
                    onTaskUpdate={handleTaskUpdate}
                />
            </div>
        </div>
    )
}
