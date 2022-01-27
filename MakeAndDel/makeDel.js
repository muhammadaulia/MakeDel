function alertMessage() {
    alert("We are very sorry to inform you to wait for the next update to see more of our products");
}

const slide = document.querySelectorAll('.image-slider');
const nextButton = document.querySelector('.nextBtn');
const prevButton = document.querySelector('.prevBtn');

slide.forEach(function(slide, index) {
    slide.style.left = `${index*100}%`;
});

let counter = 0;

nextButton.addEventListener('click', function (params) {
    counter++;
    carousel();
});

prevButton.addEventListener('click', function (params) {
    counter--;
    carousel();
});

function carousel(params) {
    if (counter < slide.length - 1) {
        nextButton.style.display = 'block';
    } else {
        nextButton.style.display = 'none';
    }

    if (counter > 0) {
        prevButton.style.display = 'block';
    } else {
        prevButton.style.display = 'none';
    }

    slide.forEach(function(slide) {
        slide.style.transform = `translate(-${counter*100}%)`;
    });
}

prevButton.style.display= 'none';