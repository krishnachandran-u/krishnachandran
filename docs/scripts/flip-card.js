export function createFlipCard(frontId, frontContent, backId, backContent) {
    return `
        <div class="flip-card-inner">
            <div class="flip-card-front" id="${frontId}">
                ${frontContent}
            </div>
            <div class="flip-card-back" id="${backId}">
                ${backContent}
            </div>
        </div>
    `;
}

export function buildContactFlipCard() {
    const frontContent = '<h1>CONTACT</h1>';
    const backContent = '<img id="gmail-icon" src="./assets/icons/icons8-gmail.svg" alt="External SVG">';

    const flipCard = createFlipCard('contact-front', frontContent, 'contact-back', backContent);
    const target = document.getElementById('contact');

    target.innerHTML = flipCard;
}

