const popapCart = document.querySelector(".cart-popup-container");
const cartOpen = document.querySelector(".popular__link-item--green");
const cartClose = document.querySelector(".card-close-button");

cartOpen.addEventListener("click", function (evt) { 
    evt.preventDefault();
    popapCart.classList.add("cart-popup-show");
});

cartClose.addEventListener("click", function (evt) { 
    evt.preventDefault();
    popapCart.classList.remove("modal-map-show");
});

