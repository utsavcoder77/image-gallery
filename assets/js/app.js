(() => {
    const enlargeImage  = (event) => {
        const imagePath = event.target.src;
        const largeImage = document.querySelector(".large-image img");
        largeImage.src = imagePath;
        const largeImageContainer = document.querySelector(".large-image");
        largeImageContainer.style.display = "block";

        }

    const closeLargeImage = () => {
        const largeImageContainer = document.querySelector(".large-image");
        largeImageContainer.style.display = "none";
    }

    const initilizeEvent = () => {
    const galleryImages = document.querySelectorAll(".gallery-container img");
    galleryImages.forEach((img) =>{
        img.addEventListener("click", enlargeImage);
    });


    const closeButton = document.querySelector(".large-image button");
    closeButton.addEventListener("click", closeLargeImage);
    }


    const populateImages = () => {
        

    const images = [
        "./assets/images/beach.avif",
        "./assets/images/car.avif",
        "./assets/images/dusk.jpg",
        "./assets/images/city.avif",
        "./assets/images/sky.avif",
        "./assets/images/forest.avif"

    ];

    const allImages = images.map(image => {
        return `
            <div>
                <img src="${image}" alt="">
            </div>
        `
    });
    const galleryContainer = document.querySelector(".gallery-container");
    galleryContainer.innerHTML =allImages.join("");
}

    populateImages();
    initilizeEvent();

})();