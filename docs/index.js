function resizeGmailIcon() {
    var gmailIcon = document.getElementById('gmail-icon');

    gmailIcon.style.width = gmailIcon.style.height = window.innerWidth / 4 + 'px';
}

window.addEventListener("resize", resizeGmailIcon);

resizeGmailIcon();

function printViewportSize() {
    console.log("Viewport Width: " + window.innerWidth);
    console.log("Viewport Height: " + window.innerHeight);
}

window.addEventListener("resize", printViewportSize);

printViewportSize();

