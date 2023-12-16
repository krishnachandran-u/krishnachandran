export function resizeGmailIcon() {
    var gmailIcon = document.getElementById('gmail-icon');

    gmailIcon.style.width = gmailIcon.style.height = window.innerWidth / 4 + 'px';
}

