"use client"

import { useState } from "react"
import "@/app/globals.css"
import Navigator from "@/components/Navigator"
import useKeyboardShortcut from "@/hooks/useKeyboardShortcuts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [isNavigatorOpen, setIsNavigatorOpen] = useState(false)
    const toggleNavigator = () => {
        setIsNavigatorOpen((prev) => !prev)
    }

    useKeyboardShortcut(
        [
            { key: "k", ctrlKey: true },
            { key: "k", metaKey: true },
        ],
        toggleNavigator
    )
    return (
        <html lang="en">
            <head></head>
            <body>
                <Navigator
                    isOpen={isNavigatorOpen}
                    onClose={() => setIsNavigatorOpen(false)}
                    projectName="scintlabs"
                    projectId="#5"
                />
                <div className="flex w-full h-full max-w-screen max-h-screen border-0 border-t border-neutral-950 bg-[#181818]">
                    {children}
                </div>
            </body>
        </html>
    )
}
