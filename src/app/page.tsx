import React from "react"
import ProjectDashboard from "@/components/ProjectDashboard"
import Panels from "@/components/Panels"
import Sidebar from "@/components/Sidebar"

export default function Home() {
    return (
        <div className="flex flex-row justify-between max-w-screen">
            <Sidebar />
            <ProjectDashboard />
            <Panels />
        </div>
    )
}
