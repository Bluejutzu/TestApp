function handleKeyPress(event: KeyboardEvent) {
    document.getElementById("last-keypress").innerText = event.key;
    console.log(`You pressed ${event.key}`);
}

window.addEventListener("keyup", handleKeyPress, true);
