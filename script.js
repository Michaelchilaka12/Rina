document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('image');
    const button = document.getElementById('sliderButton');

    const images = ['./img/cloth1.webp', './img/cloth2.webp', './img/cloth3.jpg','./img/cloth4.jpg'
    ,'./img/cloth5.jpg','./img/cloth6.jpg','./img/cloth7.jpg','./img/cloth8.jpg','./img/cloth9.jpg',
    './img/cloth10.jpg','./img/cloth11.jpg','./img/cloth12.jpg','./img/cloth13.jpg','./img/cloth14.jpg',
    './img/cloth15.jpg','./img/cloth16.jpg','./img/cloth17.jpg','./img/cloth18.jpg']; // Array of image paths
        let currentIndex = 0;

    button.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Cycle through images
        image.src = images[currentIndex];
    });

    // Modal functionality
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];

   
    image.addEventListener('click', () => {
        console.log('Image clicked');
        modal.style.display = 'block';
        modalImage.src = image.src;
        caption.textContent = `Image ${currentIndex + 1}`;
    });
    

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
//second 


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
  }
  


  //for photo
  document.addEventListener('DOMContentLoaded', () => {
    // Modal elements
    const modal = document.getElementById('imageModal1');
    const modalImg = document.getElementById('modalImage1');
    const caption = document.getElementById('caption1');
    const closeBtn = document.querySelector('.close1');
  
    // Select all images in the gallery
    const galleryImages = document.querySelectorAll('.gallery-grid img');
  
    // Iterate over each image and add a click event listener
    galleryImages.forEach((img) => {
      img.addEventListener('click', () => {
        modal.style.display = 'block'; // Show the modal
        modalImg.src = img.src; // Set modal image source to clicked image's source
        caption.textContent = img.alt; // Set caption to the image's alt text
      });
    });
  
    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close the modal when clicking outside the image
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  