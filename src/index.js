// Updated to use event.code for consistent key detection
// Refined romanianMap to ensure proper handling of uppercase and lowercase
const romanianMap = {
    "Alt+Shift+KeyA": "Ă",
    "Alt+Shift+KeyS": "Ș",
    "Alt+Shift+KeyT": "Ț",
    "Alt+Shift+KeyI": "Î",
    "Alt+Shift+KeyE": "Â",
    "Alt+KeyA": "ă",
    "Alt+KeyS": "ș", 
    "Alt+KeyT": "ț",
    "Alt+KeyI": "î",
    "Alt+KeyE": "â"
};

// Listen for keydown events and insert Romanian letters
window.addEventListener("keydown", (event) => {
    const keyCombination = `${event.altKey ? "Alt+" : ""}${event.shiftKey ? "Shift+" : ""}${event.code}`;
    console.log("Detected key combination:", keyCombination); // Debugging log

    if (romanianMap[keyCombination]) {
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === "TEXTAREA" || activeElement.tagName === "INPUT")) {
            const start = activeElement.selectionStart;
            const end = activeElement.selectionEnd;
            const value = activeElement.value;

            // Insert the Romanian letter
            activeElement.value = value.slice(0, start) + romanianMap[keyCombination] + value.slice(end);
            activeElement.selectionStart = activeElement.selectionEnd = start + 1;

            console.log("Inserted Romanian letter:", romanianMap[keyCombination]); // Debugging log
            event.preventDefault(); // Prevent default browser behavior
        }
    } else {
        console.log("No match found for key combination:", keyCombination); // Debugging log
    }
});
