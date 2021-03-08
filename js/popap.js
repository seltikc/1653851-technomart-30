const modal = document.querySelector(".feeldback");
const btnOpen = document.querySelector(".delivery__btn");
const btnClose = document.querySelector(".modal-close");


btnOpen.addEventListener("click", function (evt) { 
    evt.preventDefault();
    modal.classList.add("feeldback-show");
});

btnClose.addEventListener("click", function (evt) { 
    evt.preventDefault();
    modal.classList.remove("feeldback-show");
});

