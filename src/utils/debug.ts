
const keyDownCallback = (event: KeyboardEvent) => {
    if (event.altKey && event.code === "KeyR" && !event.shiftKey && !event.ctrlKey) localStorage.clear()
}

const debugFunctions = () => {
    window.addEventListener("keydown", keyDownCallback)
}

export default debugFunctions;