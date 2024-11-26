
document.querySelectorAll(".skills-list button").forEach(button => {
    button.addEventListener("click", () => {
      const videoSource = button.getAttribute("data-video");
      const videoElement = document.getElementById("skill-video");
      videoElement.querySelector("source").src = videoSource;
      videoElement.load();
    });
  });
  

  document.querySelectorAll(".skin-thumbnail").forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
      const mainSkin = document.getElementById("main-skin");
      mainSkin.src = thumbnail.src;
    });
  });
  
  const mainImages = document.querySelectorAll(".carousel-main img");
const thumbnails = document.querySelectorAll(".carousel-thumbnails img");

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {


    mainImages.forEach(img => img.classList.remove("active"));
    thumbnails.forEach(img => img.classList.remove("active"));

    mainImages[index].classList.add("active");
    thumbnail.classList.add("active");
  });
});