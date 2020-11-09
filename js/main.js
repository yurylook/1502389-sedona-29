'use strict';

const buttonForm = document.querySelector(".search-button");
const modalForm = document.querySelector(".form-booking");
const adults = modalForm.querySelector("#adult-amount");
const childrens = modalForm.querySelector("#child-amount");
const buttonSelect = document.querySelector(".button-date");
let isStorageSupport = true;
let storageAdult = "";
let storageChildren = "";

try {
  storageAdult = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("childrens")
} catch (err) {
  isStorageSupport = false;
}

buttonForm.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalForm.classList.toggle("modal-show");
    if (storageAdult) {
      adults.value = storageAdult;
    }
    if (storageChildren) {
      childrens.value = storageChildren;
    }
});

buttonSelect.addEventListener("click", function(evt) {
  if (!adults.value || !childrens.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("childrens", childrens.value)
    }
  }
});

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      evt.preventDefault();
      modalForm.classList.remove("modal-show");
      modalForm.classList.remove(".modal-error");
    }

});


