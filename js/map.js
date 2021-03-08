const map = document.querySelector(".modal-map");
const openMap = document.querySelector(".delivery__img-map");


openMap.addEventListener("click", function (evt) { 
    evt.preventDefault();
    modal.classList.add("modal-map-show");
});