function createFlipCard(containerId, frontId, frontContent, backId, backContent) {
    return `
        <div class="grid-cell flip-card" id="${containerId}">
            <div class="flip-card-inner">
                <div class="flip-card-front" id="${frontId}">
                    <h1>${frontContent}</h1>
                </div>
                <div class="flip-card-back" id="${backId}">
                    ${backContent}
                </div>
            </div>
        </div>
    `;
}

/*
function buildContactFlipCard() {
    const flipCardBack = ''
}
*/
