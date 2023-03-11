let overlayEl = null
let overlayImageEl = null

function init() {
    renderGallery()

    overlayEl = document.querySelector('.overlay');
    overlayImageEl = overlayEl.querySelector('img');
    const overlayCloseBtn = overlayEl.querySelector('.close-btn');
    const galleryItems = document.querySelectorAll('.item');

    galleryItems.forEach(item => item.addEventListener('click', handleClick));

    overlayCloseBtn.addEventListener('click', closeImage);


}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

function generateGalleryItem([h, v]) {
    return `
      <div class="item h${h} v${v}">
        <img src="images/${getRandomNumber(12)}.jpg">
        <div class="item__overlay">
          <button>View →</button>
        </div>
      </div>
    `;

}

function generateDigitsArr() {
    return Array.from({
        length: 50
    }, () => [getRandomNumber(4), getRandomNumber(4)]).concat([
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],


    ])

}

function renderGallery() {
    const galleryEl = document.querySelector('.gallery');

    const gallery = generateDigitsArr().map(generateGalleryItem).join('');
    galleryEl.innerHTML = gallery;
}

function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImageEl.src = src;
    overlayEl.classList.add('open');
}


function closeImage() {
    overlayEl.classList.remove('open');
}


document.addEventListener("DOMContentLoaded", init)