function handleKeyPress(event: any) {
    document.getElementById("last-keypress").innerText = event.key;
    console.log(`You pressed ${event.key}`);
}

function handleMouseMove(e: MouseEvent) {
    document.getElementById("client-x").innerHTML = `${e.clientX}`;
    document.getElementById("client-y").innerHTML = `${e.clientY}`;
    document.getElementById("client-alt").innerHTML = `${e.altKey}`;
    document.getElementById("client-ctrl").innerHTML = `${e.ctrlKey}`;
    document.getElementById("client-shift").innerHTML = `${e.shiftKey}`;
}

window.addEventListener("keyup", handleKeyPress, true);
window.addEventListener("mousemove", handleMouseMove, true);
