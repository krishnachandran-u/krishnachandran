import { buildContactFlipCard, buildResumeFlipCard, buildSocialFlipCard } from "./flip-card.js";

document.addEventListener('DOMContentLoaded', function () {
    buildContactFlipCard();
    buildResumeFlipCard();
    buildSocialFlipCard();

    window.addEventListener("resize", function() { 
        //dynamic resize
    });
});
