
let topindex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('top-tag-slider-container');
    const images = Array.from(container.getElementsByTagName('div'));
    const imageWidth = images[0].offsetWidth + 10; // Image width plus margin

    // Clone first and last images
    const firstImageClone = images[0].cloneNode(true);
    const lastImageClone = images[images.length - 2].cloneNode(true);

    // Append clones to the container
    container.appendChild(firstImageClone);
    container.insertBefore(lastImageClone, container.firstChild);

    function slideRight() {
        const maxIndex = images.length;
        topindex++;

        // Use requestAnimationFrame for smoother animation
        requestAnimationFrame(() => {
            container.style.transition = 'transform 2s ease';
            container.style.transform = `translateX(${-topindex * imageWidth}px)`;
        });

        // Reset to the beginning smoothly
        if (topindex === maxIndex - 5) {
            setTimeout(() => {
                // Use requestAnimationFrame for smoother animation
                requestAnimationFrame(() => {
                    container.style.transition = 'transform 2s ease';
                    container.style.transform = 'translateX(0)';
                    topindex = 0;
                });
            }, 500); // Transition duration
        }
    }
    const rightArrow = document.getElementById('right-arrow');
    rightArrow.addEventListener('click', slideRight);
    // Optional: Auto-slide every 3 seconds
    setInterval(slideRight, 5000);
});



document.querySelectorAll('.swiper').forEach(swiper => {
    const container = swiper.querySelector('.swiper-container');
    const leftArrow = swiper.querySelector('.swiper-left-arrow');
    const rightArrow = swiper.querySelector('.swiper-right-arrow');
    const blocks = container.querySelectorAll('.index-ppfs-post-card, .top_posts_content_card, .index-vpl-post-card, .index-npfs-post-card');
    const blockWidth = blocks[0].offsetWidth + 10; // Adjust 10 for margin
    let currentIndex = 0;

    function updateArrows() {
        leftArrow.classList.toggle('disabled', currentIndex === 0);
        rightArrow.classList.toggle('disabled', currentIndex >= blocks.length - 4);
    }

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            container.scrollTo({
                left: blockWidth * currentIndex,
                behavior: 'smooth'
            });
        }
        updateArrows();
    });
    
    rightArrow.addEventListener('click', () => {
        console.log("video switch");
        if (currentIndex < blocks.length - 4) {
            currentIndex++;
            container.scrollTo({
                left: blockWidth * currentIndex,
                behavior: 'smooth'
            });
        }
        updateArrows();
    });

    updateArrows();
});
document.querySelectorAll('.swiper-one').forEach(swiper => {
    const container = swiper.querySelector('.swiper-container-one');
    const leftArrow = swiper.querySelector('.swiper-left-arrow');
    const rightArrow = swiper.querySelector('.swiper-right-arrow');
    const blocks = container.querySelectorAll('.index-vpl-post-card');
    const blockWidth = blocks[0].offsetWidth + 10; // Adjust 10 for margin
    let currentIndex = 0;

    function updateArrows() {
        leftArrow.classList.toggle('disabled', currentIndex === 0);
        rightArrow.classList.toggle('disabled', currentIndex >= blocks.length - 4);
    }

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            container.scrollTo({
                left: blockWidth * currentIndex,
                behavior: 'smooth'
            });
        }
        updateArrows();
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex < blocks.length - 4) {
            currentIndex++;
            container.scrollTo({
                left: blockWidth * currentIndex,
                behavior: 'smooth'
            });
        }
        updateArrows();
    });


    updateArrows();
});