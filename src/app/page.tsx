import React from "react"
import ProjectDashboard from "@/components/ProjectDashboard"
import Panels from "@/components/Panels"
import Sidebar from "@/components/Sidebar"

export default function Home() {
    return (
        <div className="flex h-screen max-w-screen">
            <Sidebar />
            <div className="relative flex-1">
                <ProjectDashboard />
                <Panels className="absolute top-0 right-0 z-10" />
            </div>
        </div>
    )
}
