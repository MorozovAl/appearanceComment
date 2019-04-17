let appearanceComments = document.getElementsByClassName('appearance');

function getCoords(elem) { // кроме IE8-
    let box = elem.getBoundingClientRect();
    return box.top + pageYOffset;
}

function ready() {
    window.onscroll = () => {
        let positionElement = getCoords(appearanceComments[0]);
        let positionWindow = pageYOffset + document.documentElement.clientHeight;
        if (positionWindow >= positionElement) {
            setTimeout(function() {
                appearanceComments[0].classList.add('fixed');
            }, 1000);
        }
    }
}

document.addEventListener("DOMContentLoaded", ready);
