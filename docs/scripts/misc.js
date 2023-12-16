function printViewportSize() {
    console.log("Viewport Width: " + window.innerWidth);
    console.log("Viewport Height: " + window.innerHeight);
}

window.addEventListener("resize", printViewportSize);

printViewportSize();