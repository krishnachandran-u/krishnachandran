import { resizeGmailIcon } from "./icons.js";
import { buildContactFlipCard } from "./flip-card.js";

document.addEventListener('DOMContentLoaded', function () {
    buildContactFlipCard();
    resizeGmailIcon();

    window.addEventListener("resize", function() {
        resizeGmailIcon();
    });
});
