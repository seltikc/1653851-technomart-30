const modal = document.querySelector(".feeldback");
const btnOpen = document.querySelector(".delivery__btn");
const btnClose = document.querySelector(".modal-close");

const map = document.querySelector(".modal-container");
const openMap = document.querySelector(".delivery__img-map");
const btnClos = document.querySelector(".modal-close-map");

const popapCart = document.querySelector(".cart-popup-container");
const cartOpen = document.querySelectorAll(".popular__link-item--green");
const cartClose = document.querySelector(".card-close-button");

function openPopup(evt, item) {
  evt.preventDefault();
  item.classList.add("modal-show");
};

function closePopup(evt, item) {
  evt.preventDefault();
  item.classList.remove("modal-show");
};

if (modal) {
  btnOpen.addEventListener("click", function (evt) {
    openPopup(evt, modal);
  });

  btnClose.addEventListener("click", function (evt) {
    closePopup(evt, modal);
  });
};

if (map) {
  openMap.addEventListener("click", function (evt) {
    openPopup(evt, map);
  });

  btnClos.addEventListener("click", function (evt) {
    closePopup(evt, map);
  });
}

if (popapCart) {
  cartOpen.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      openPopup(evt, popapCart);
    })
  });

  cartClose.addEventListener("click", function (evt) {
    closePopup(evt, popapCart);
  });
};
