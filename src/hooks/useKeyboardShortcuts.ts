import { useEffect } from "react"

type KeyCombination = {
    key: string
    ctrlKey?: boolean
    shiftKey?: boolean
    altKey?: boolean
    metaKey?: boolean
}

/**
 * Hook to handle keyboard shortcuts
 * @param keyCombination The key combination to listen for
 * @param callback Function to execute when the key combination is pressed
 * @param preventDefault Whether to prevent the default browser behavior
 */
const useKeyboardShortcut = (
    keyCombination: KeyCombination | KeyCombination[],
    callback: () => void,
    preventDefault = true
) => {
    useEffect(() => {
        const combinations = Array.isArray(keyCombination)
            ? keyCombination
            : [keyCombination]

        const handleKeyDown = (event: KeyboardEvent) => {
            const matchesCombination = combinations.some((combo) => {
                const keyMatch =
                    event.key.toLowerCase() === combo.key.toLowerCase() ||
                    event.code.toLowerCase() === combo.key.toLowerCase()

                const modifiersMatch =
                    (combo.ctrlKey === undefined || event.ctrlKey === combo.ctrlKey) &&
                    (combo.shiftKey === undefined ||
                        event.shiftKey === combo.shiftKey) &&
                    (combo.altKey === undefined || event.altKey === combo.altKey) &&
                    (combo.metaKey === undefined || event.metaKey === combo.metaKey)

                return keyMatch && modifiersMatch
            })

            if (matchesCombination) {
                if (preventDefault) {
                    event.preventDefault()
                }
                callback()
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [keyCombination, callback, preventDefault])
}

export default useKeyboardShortcut
