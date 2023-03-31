const images = ["img/Grocery-shopping-bro-1.svg", "img/Grocery-shopping-bro-2.svg", "img/Grocery-shopping-bro-3.svg"];
let index = 0;

function changeImage() {
  const img = document.getElementById("fade-img");
  img.src = images[index];
  
  index++;
  if (index >= images.length) {
    index = 0;
  }
}

function changeImage() {
    const img = document.getElementById("fade-img");
    
    // Fade out the current image
    img.style.opacity = 0;
    
    // Wait for the transition to complete before changing the image source
    setTimeout(() => {
      img.src = images[index];
      
      // Fade in the new image
      img.style.opacity = 1;
      
      index++;
      if (index >= images.length) {
        index = 0;
      }
    }, 1000); // Wait for the transition duration (0.5s) before changing the image source
  }
  
  setInterval(changeImage, 5000); //change image every 3 seconds
