let currentImageIndex = 0;
let isZoomed = false;

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    showImage();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    resetZoom();
}

function showImage() {
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("caption");

    const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];
    lightboxImg.src = images[currentImageIndex - 1];
    caption.innerHTML = "Image " + currentImageIndex;

    if (isZoomed) {
        resetZoom();
    }
}

function zoomToggle() {
    const lightboxImg = document.getElementById("lightbox-img");
    isZoomed = !isZoomed;

    if (isZoomed) {
        lightboxImg.style.transform = "scale(1.2)";
    } else {
        lightboxImg.style.transform = "scale(1)";
    }
}

function resetZoom() {
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.style.transform = "scale(1)";
    isZoomed = false;
}
