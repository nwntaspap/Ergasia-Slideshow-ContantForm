window.addEventListener('DOMContentLoaded', () => {
    const images = [
        'slide1.png',
        'slide2.jpg',
        'slide3.png',
        'slide4.png',
        'slide5.jpg',
    ];
    let currentImageIndex = 0;

    const previousBtn = document.querySelector("#previousBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const thubnailsContainer = document.querySelector('#thubnailsContainer');

    const print = () => {
         const currentImage = images[currentImageIndex];
         const slideImage = document.querySelector('#carousel img.slide');
         const thubnailsContainer = document.querySelector('#thubnailsContainer');

         slideImage.src = './images/' + currentImage;

         let thubnailsImagesTemplate = '';
         images.forEach((image, index) => {
             let classNames = 'dot';
             if(index === currentImageIndex) {
                 classNames += ' active'
             }
             thubnailsImagesTemplate += `
                <img class="${classNames}" 
                     src="./images/${image}" 
                />
            `;
         });
         thubnailsContainer.innerHTML = thubnailsImagesTemplate;
    }

    const previewNextImage = () => {
        if(currentImageIndex === images.length -1) {
            currentImageIndex = 0;
        } else {
            currentImageIndex++;
        }
        print();
    }
    const previewPreviousImage = () => {
        if(currentImageIndex === 0) {
            currentImageIndex = images.length - 1;
        } else {
            currentImageIndex--;
        }
        print();
    }

    nextBtn.addEventListener('click', previewNextImage);

    previousBtn.addEventListener('click', previewPreviousImage);

    print();
})