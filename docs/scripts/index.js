import { buildContactFlipCard, buildResumeFlipCard } from "./flip-card.js";

document.addEventListener('DOMContentLoaded', function () {
    buildContactFlipCard();
    buildResumeFlipCard();

    window.addEventListener("resize", function() { 
        //dynamic resize
    });
});
