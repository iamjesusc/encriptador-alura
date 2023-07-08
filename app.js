// Simplifica la seleccion de DOM, para evitar codigo repetitivo
const $ = (selector) => document.querySelector(selector);

const $contentCipher = $("#content__cipher");
const $contentView = $("#content__view");
const $descriptionView = $("#description__content");
const $btnEncrypt = $("#btn__encrypt");
const $btnDecrypt = $("#btn__decrypt");
const $btnCopy = $("#btn__copy");

function encrypt() {
  let phrase = $contentCipher.value;

  let encripted = phrase
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  $contentView.value = encripted;
  $contentView.style.background = "none";

  $descriptionView.style.display = "none";

  $btnDecrypt.style.cssText = "background: white; color: #0a3871";

  $btnCopy.style.display = "flex";

  return encripted;
}

function decrypt() {
  let encripted = $contentCipher.value;

  let decrypted = encripted
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  $contentView.value = decrypted;
  $contentView.style.background = "none";

  $descriptionView.style.display = "none";

  $btnDecrypt.style.cssText = "background: white; color: #0a3871";

  $btnCopy.style.display = "flex";

  return decrypted;
}

function copyEncryption() {
  // copiar el texto con API portapapeles
  $contentView.select();
  navigator.clipboard.writeText($contentView.value);
  alert("Mensaje copiado");

  $contentCipher.value = $contentView.value;
  $contentView.value = "";

  $contentView.style.background = "";

  $descriptionView.style.display = "";

  $btnDecrypt.style.cssText = "";

  $btnCopy.style.display = "";

  $contentCipher.focus();
}
$btnCopy.addEventListener("click", copyEncryption);

//Para controlar el ingreso de texto no requierdo.
function validateText() {
  let text = $contentCipher.value;
  const VALIDATE = /^[a-zñ\s]+$/;

  // evitar que las siguientes reglas se ejecuten si el campo de texto esta vacio
  if (text === "") {
    return;
  }

  // si no cumple lo propuesto por VALIDATE se previene el ingreso de valor contrario a lo propuesto.
  if (!VALIDATE.test(text)) {
    $contentCipher.value = text.replace(/[^a-zñ\s]/g, "");
    alert("Solo letras minúsculas y sin acentos");
  }
}
$contentCipher.addEventListener("input", validateText);

// Controlar el estado de los botones en función del contenido ingresado
function controlButtonsOn() {
  let text = $contentCipher.value;

  $btnEncrypt.disabled = text === "";
  $btnDecrypt.disabled = text === "";
}

$contentCipher.addEventListener("input", controlButtonsOn);

//tener control sobre los clicks
function handleClickButtons(event) {
  let text = $contentCipher.value;

  if (text === "") {
    alert("Ingrese el texto que desea encriptar o desencriptar.");
    return;
  }

  const CLICKED_BTN = event.target;

  if (CLICKED_BTN.id === "btn__encrypt") {
    encrypt();
  }

  if (CLICKED_BTN.id === "btn__decrypt") {
    decrypt();
  }
}

$btnEncrypt.addEventListener("click", handleClickButtons);
$btnDecrypt.addEventListener("click", handleClickButtons);
