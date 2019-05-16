var buy_links = document.querySelectorAll(".card__button--buy");
var purchase = document.querySelector(".modal--purchase");
var close_purchase = purchase.querySelector(".modal__close-button");

buy_links.forEach(function (button) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    purchase.classList.add("modal__show");
  })
});

close_purchase.addEventListener("click", function (evt) {
  evt.preventDefault();
  purchase.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (purchase.classList.contains("modal__show")) {
      purchase.classList.remove("modal__show");
    }
  }
});

var popup_letter = document.querySelector(".modal--letter");

var write_us = document.querySelector(".button--letter");
var close_letter = popup_letter.querySelector(".modal__close-button");
var user_name = popup_letter.querySelector("[name=username]");
var form = popup_letter.querySelector("form");
var user_mail = popup_letter.querySelector("[name=usermail]");
var text = popup_letter.querySelector("[name=usertext]");
var is_storage_support = true;
var storage_name = "";
var storage_mail = "";

try {
  storage_name = localStorage.getItem("username");
  storage_mail = localStorage.getItem("usermail");
} catch (error) {
  is_storage_support = false;
}


write_us.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_letter.classList.add("modal__show");

  if (storage_name && storage_mail) {
    user_name.value = storage_name;
    user_mail.value = storage_mail;
    text.focus();
  } else if (!storage_name && storage_mail) {
    user_mail.value = storage_mail;
    user_name.focus();
  } else if (storage_name && !storage_mail) {
    user_mail.focus();
  }
});

close_letter.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_letter.classList.remove("modal__show");
  popup_letter.classList.remove("modal__error");
});

form.addEventListener("submit", function (evt) {

  if (!user_name.value || !user_mail.value || !text.value) {
    evt.preventDefault();
    popup_letter.classList.remove("modal__error");
    popup_letter.offsetWidth = popup_letter.offsetWidth;
    popup_letter.classList.add("modal__error");
    console.log("Введите имя и адрес");
  } else {
    if (is_storage_support) {
      localStorage.setItem("username", user_name.value);
      localStorage.setItem("usermail", user_mail.value);
    }
    form.submit();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup_letter.classList.contains("modal__show")) {
      popup_letter.classList.remove("modal__show");
      popup_letter.classList.remove("modal__error");
    }
  }

});

var map = document.querySelector(".modal--map");

var map_link = document.querySelector(".info__map");
var close_map = map.querySelector(".modal__close-button");


map_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal__show");
});

close_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("modal__show")) {
      map.classList.remove("modal__show");
    }
  }
});




