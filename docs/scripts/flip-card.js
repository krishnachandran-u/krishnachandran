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

export function socialBackContent() {
    return `
        <div class='social-grid'>
            <div class="social-cell" id="social-cell-11">
                <img class="social-icon" id="github-white-icon" src="./assets/icons/social/github-white.svg" alt="Github Icon">
            </div>
            <div class="social-cell id="social-cell-12">
                <img class="social-icon" id="linkedin-white-icon" src="./assets/icons/social/linkedin-white.svg" alt="LinkedIn Icon">
            </div>
            <div class="social-cell id="social-cell-13">
                <img class="social-icon" id="twitter-white-icon" src="./assets/icons/social/twitter-white.svg" alt="Twitter Icon">
            </div>
            <div class="social-cell id="social-cell-21">
                <img class="social-icon" id="instagram-white-icon" src="./assets/icons/social/instagram-white.svg" alt="Instagram Icon"> 
            </div>
            <div class="social-cell id="social-cell-22">
                <img class="social-icon" id="codeforces-white-icon" src="./assets/icons/social/codeforces-white.svg" alt="Codeforces Icon"> 
            </div>
            <div class="social-cell id="social-cell-23">
                <img class="social-icon" id="discord-white-icon" src="./assets/icons/social/discord-white.svg" alt="Discord Icon"> 
            </div>
        </div>
    `;
}

export function buildSocialFlipCard() {
    const frontContent = '<h1>SOCIAL</h1>';
    const backContent = socialBackContent();

    const flipCard = createFlipCard('social-front', frontContent, 'social-back', backContent);

    setInnerHTML('social', flipCard);
}


