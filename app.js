function encrypt() {
  let contentCipher = document.querySelector(".content__cipher");
  let phrase = contentCipher.value;

  if (phrase !== "") {
    let encripted = phrase
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    let contetView = document.querySelector(".content__view");
    contetView.value = encripted;
    contetView.style.background = "none";

    let descriptionView = document.querySelector(".description__content");
    descriptionView.style.display = "none";

    let btnCopy = document.querySelector(".btn__copy");
    btnCopy.style.display = "flex";

    let btnDecrypt = document.querySelector(".btn__decrypt");
    btnDecrypt.style.background = "white";

    return encripted;
  } else {
    alert("Ingresa el texto que desees encriptar o desencriptar.");
  }
}

function decrypt() {
  let contentCipher = document.querySelector(".content__cipher");
  let encripted = contentCipher.value;

  if (encripted !== "") {
    let decrypted = encripted
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    let contetView = document.querySelector(".content__view");
    contetView.value = decrypted;
    contetView.style.background = "none";

    let descriptionView = document.querySelector(".description__content");
    descriptionView.style.display = "none";

    let btnDecrypt = document.querySelector(".btn__decrypt");
    btnDecrypt.style.background = "white";

    let btnCopy = document.querySelector(".btn__copy");
    btnCopy.style.display = "flex";

    return decrypted;
  } else {
    alert("Ingresa el texto que desees encriptar o desencriptar.");
  }
}

function copyEncryption() {
  let contentView = document.querySelector(".content__view");
  contentView.select();
  navigator.clipboard.writeText(contentView.value);
  alert("Mensaje copiado");

  let contentCipher = document.querySelector(".content__cipher");
  contentCipher.value = contentView.value;

  contentView.value = "";
  contentView.style.background = "";

  let descriptionView = document.querySelector(".description__content");
  descriptionView.style.display = "";

  let btnCopy = document.querySelector(".btn__copy");
  btnCopy.style.display = "";

  let btnDecrypt = document.querySelector(".btn__decrypt");
  btnDecrypt.style.background = "";
}

function validateText() {
  let contentCipher = document.querySelector(".content__cipher");
  let text = contentCipher.value;

  if (text !== "") {
    const validate = /^[a-zñ\s]+$/;

    if (!validate.test(text)) {
      contentCipher.value = text.replace(/[^a-zñ\s]/g, "");
      alert("Solo letras minúsculas y sin acentos");
    }
  }
}
