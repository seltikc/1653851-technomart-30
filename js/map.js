const map = document.querySelector(".modal-container");
const openMap = document.querySelector(".delivery__img-map");
const btnClos = document.querySelector(".modal-close-map");


openMap.addEventListener("click", function (evt) { 
    evt.preventDefault();
    map.classList.add("modal-map-show");
});

btnClos.addEventListener("click", function (evt) { 
    evt.preventDefault();
    map.classList.remove("modal-map-show");
});
