function updateScreenWidth() {
    var screenwidth = window.innerWidth; 
    console.log('Screen width: ' + screenwidth + 'pixels');
}

window.addEventListener('resize', updateScreenWidth);

updateScreenWidth();