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

export function setInnerHTML(id, innerHTML) {
    const target = document.getElementById(id);
    target.innerHTML = innerHTML;  
} 

export function buildContactFlipCard() {
    const frontContent = '<h1>CONTACT</h1>';
    const backContent = '<img id="contact-gmail-icon" src="./assets/icons/icons8-gmail.svg" alt="Gmail Icon">';

    const flipCard = createFlipCard('contact-front', frontContent, 'contact-back', backContent);

    setInnerHTML('contact', flipCard);
}

export function buildResumeFlipCard() {
    const frontContent = '<h1>RESUME</h1>'
    const backContent = '<img id="resume-download-icon" src="./assets/icons/download-svgrepo-com.svg" alt="Download Icon">'

    const flipCard = createFlipCard('resume-front', frontContent, 'resume-back', backContent);

    setInnerHTML('resume', flipCard);
}

export function buildSocialFlipCard() {
    const frontContent = '<h1>SOCIAL</h1>';
    const backContent = '';

    const flipCard = createFlipCard('social-front', frontContent, 'social-back', backContent);

    setInnerHTML('social', flipCard);
}


