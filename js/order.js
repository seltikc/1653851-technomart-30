const popapCart = document.querySelector(".cart-popup-container");
const cartOpen = document.querySelectorAll(".popular__link-item--green");
const cartClose = document.querySelector(".card-close-button");


cartOpen.forEach(function(item) {
    item.addEventListener('click', function(evt) {
    evt.preventDefault();
    popapCart.classList.toggle("cart-popup-show");})
    });


cartClose.addEventListener("click", function (evt) { 
    evt.preventDefault();
    popapCart.classList.remove("cart-popup-show");
});

