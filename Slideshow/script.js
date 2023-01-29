window.addEventListener('DOMContentLoaded', () => {
    const images = [
        'slide1.png',
        'slide2.jpg',
        'slide3.png',
        'slide4.png',
        'slide5.jpg',
    ];
    let currentImageIndex = 0;
    let sliderInterval = null;

    const previousBtn = document.querySelector("#previousBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const thubnailsContainer = document.querySelector('#thubnailsContainer');
    const playBtn = document.querySelector('#play');
    const pauseBtn = document.querySelector('#pause');


    const print = () => {
         const currentImage = images[currentImageIndex];
         const slideImage = document.querySelector('#carousel img.slide');
         const thubnailsContainer = document.querySelector('#thubnailsContainer');

         slideImage.src = './images/' + currentImage;
         thubnailsContainer.innerHTML = '';
         images.forEach((image, index) => {
             let classNames = 'dot';
             if(index === currentImageIndex) {
                 classNames += ' active'
             }

             let img = document.createElement('img');
             img.className = classNames;
             img.onclick = () => makeImageCurrent(index);
             img.src = `./images/${image}`;

             thubnailsContainer.appendChild(img)
         });
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
    const makeImageCurrent = imageindex => {
        currentImageIndex = imageindex;
        print();

    }


    nextBtn.addEventListener('click', previewNextImage);

    previousBtn.addEventListener('click', previewPreviousImage);

    playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
        sliderInterval = setInterval(previewNextImage, 3000);
    })

    pauseBtn.addEventListener('click', () => {
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline';
        clearInterval(sliderInterval);
    })

    print();
})