import React, { useState, useEffect, useRef } from "react"
import { MagnifyingGlass, X, CaretRight } from "phosphor-react"

interface NavigatorItem {
    id: string
    title: string
    section: "commands" | "modes" | "filters"
    shortcut?: string
    action: () => void
}

interface NavigatorProps {
    isOpen: boolean
    onClose: () => void
    projectName?: string
    projectId?: string
    shortcutKeys?: string
}

const Navigator: React.FC<NavigatorProps> = ({
    isOpen,
    onClose,
    projectName = "scintlabs",
    projectId = "#5",
}) => {
    const [query, setQuery] = useState<string>("")
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const inputRef = useRef<HTMLInputElement>(null)

    const commandItems: NavigatorItem[] = [
        {
            id: "add-items",
            title: "Add items",
            section: "commands",
            action: () => console.log("Add items"),
        },
        {
            id: "column-field",
            title: "Column field by...",
            section: "commands",
            action: () => console.log("Column field by..."),
        },
        {
            id: "filter-by",
            title: "Filter by...",
            section: "commands",
            action: () => console.log("Filter by..."),
        },
        {
            id: "group-by",
            title: "Group by...",
            section: "commands",
            action: () => console.log("Group by..."),
        },
        {
            id: "slice-by",
            title: "Slice by...",
            section: "commands",
            action: () => console.log("Slice by..."),
        },
        {
            id: "activate-command-mode",
            title: "Activate command mode",
            section: "modes",
            shortcut: ">",
            action: () => console.log("Activate command mode"),
        },
        {
            id: "author-filter",
            title: "Search your issues, pull requests, and discussions",
            section: "filters",
            shortcut: "# author:@me",
            action: () => console.log("Author filter"),
        },
        {
            id: "filter-pull-requests",
            title: "Filter to pull requests",
            section: "filters",
            shortcut: "# is:pr",
            action: () => console.log("Filter pull requests"),
        },
    ]

    const filteredCommands = query
        ? commandItems.filter((item) =>
              item.title.toLowerCase().includes(query.toLowerCase())
          )
        : commandItems

    const commandSections = filteredCommands.reduce<{
        [key: string]: NavigatorItem[]
    }>(
        (acc, item) => {
            if (!acc[item.section]) {
                acc[item.section] = []
            }
            acc[item.section].push(item)
            return acc
        },
        { commands: [], modes: [], filters: [] }
    )

    useEffect(() => {
        setActiveIndex(0)
    }, [query])

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case "Escape":
                onClose()
                break
            case "ArrowDown":
                e.preventDefault()
                setActiveIndex((prev) =>
                    prev < filteredCommands.length - 1 ? prev + 1 : prev
                )
                break
            case "ArrowUp":
                e.preventDefault()
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
                break
            case "Enter":
                if (filteredCommands[activeIndex]) {
                    filteredCommands[activeIndex].action()
                    onClose()
                }
                break
        }
    }

    if (!isOpen) return null

    const sectionTitles: { [key: string]: string } = {
        commands: "Commands",
        modes: "Modes",
        filters: "Use filters in issues, pull requests, discussions, and projects",
    }

    return (
        <div className="absolute flex justify-center w-full z-50">
            <div
                className="fixed inset-0 bg-zinc-950/20 pointer-events-none"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="w-full max-w-3xl max-h-1/3 bg-neutral-900/95 backdrop-blur rounded-xl shadow-2xl shadow-zinc-950 relative border border-neutral-700 overflow-hidden mt-32">
                <div className="flex items-center px-4 py-3 border-b border-neutral-700 gap-3">
                    <MagnifyingGlass size={20} className="text-neutral-400" />

                    <div className="flex items-center gap-2 text-neutral-300">
                        <span>{projectName}</span>
                        <span className="text-neutral-500">/</span>
                        <span>Project {projectId}</span>
                        <span className="text-neutral-500">/</span>
                    </div>

                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-neutral-200 placeholder-neutral-500"
                        placeholder="Column field by..."
                    />

                    <button
                        onClick={onClose}
                        className="text-neutral-400 hover:text-neutral-300"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex flex-col overflow-y-auto h-full text-sm">
                    {Object.entries(commandSections).map(
                        ([section, items]) =>
                            items.length > 0 && (
                                <div key={section} className="py-2">
                                    <div className="px-4 py-2 text-neutral-400 text-sm">
                                        {sectionTitles[section]}{" "}
                                        {section === "commands" && (
                                            <span className="float-right">
                                                Type &gt; to filter
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        {items.map((item) => {
                                            // Calculate the global index for this item
                                            const globalIndex =
                                                filteredCommands.findIndex(
                                                    (cmd) => cmd.id === item.id
                                                )

                                            return (
                                                <div
                                                    key={item.id}
                                                    className={`px-4 py-3 flex justify-between items-center ${
                                                        globalIndex === activeIndex
                                                            ? "bg-neutral-800"
                                                            : "hover:bg-neutral-900"
                                                    } cursor-pointer`}
                                                    onClick={() => {
                                                        item.action()
                                                        onClose()
                                                    }}
                                                >
                                                    <div className="text-neutral-200">
                                                        {item.title}
                                                    </div>

                                                    {item.shortcut && (
                                                        <div className="text-neutral-500 flex items-center gap-1">
                                                            {section === "modes" && (
                                                                <CaretRight size={16} />
                                                            )}
                                                            {item.shortcut}
                                                        </div>
                                                    )}

                                                    {section === "commands" &&
                                                        !item.shortcut && (
                                                            <div className="text-neutral-500">
                                                                Run command
                                                            </div>
                                                        )}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navigator
