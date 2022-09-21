const imgContainerEl = document.querySelector(".img-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", function () {
  imageNum = 10;
  addNewImages();
});

function addNewImages() {
  for (i = 0; i < imageNum; i++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imgContainerEl.appendChild(newImgEl);
  }
}
