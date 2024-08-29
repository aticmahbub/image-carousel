// import "style.css"

const images = [
    "https://burst.shopifycdn.com/photos/close-up-of-a-small-white-flower.jpg?width=1850&format=pjpg&exif=0&iptc=0",
    "https://burst.shopifycdn.com/photos/bright-purple-flower.jpg?width=1850&format=pjpg&exif=0&iptc=0",
    "https://burst.shopifycdn.com/photos/perfect-yellow-flower.jpg?width=1850&format=pjpg&exif=0&iptc=0"
]

const carouselSliderEl = document.querySelector('.carousel-slide')

images.forEach((imgSrc, index) => {
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', imgSrc);
    imageElement.setAttribute('alt', `image ${index}`);

    carouselSliderEl.append(imageElement);
})

let currentIndex = 0;


const updateCarousel = () => {
    const carouselSlideEl = document.querySelector('.carousel-slide')
    carouselSlideEl.style.transform = `translateX(-${currentIndex * 450}px)`
}
document.querySelector('.prev-button').addEventListener('click', () => {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = images.length - 1;

    }
    updateCarousel()
})
document.querySelector('.next-button').addEventListener('click', () => {
    currentIndex++
    if (currentIndex == images.length) {
        currentIndex = 0;

    }
    updateCarousel()
})

const carouselControlsEl = document.querySelector('.carousel-controls')

images.forEach((_, index) => {
    const buttonElement = document.createElement('button');

    buttonElement.textContent = `${index + 1}`
    buttonElement.onclick = () => {
        currentIndex = index
        updateCarousel()
    }

    carouselControlsEl.append(buttonElement);
})