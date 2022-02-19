function llamadaEncriptar() {
  let sectionNoResult = document.querySelector("#div-no-resultado");
  let titleNoResult = document.querySelector("#p-no-title");
  let textNoResult = document.querySelector("#p-no-p");
  let divResult = document.querySelector("#div-resultado");

  let mensaje = document.querySelector("#mensaje").value;
  let pattern = /[^a-z ]/;
  let resultado = mensaje.match(pattern);
  if (resultado != null) {
    divResult.classList.add("d-none");
    sectionNoResult.classList.remove("d-none");
    titleNoResult.textContent =
      "El mensaje ingresado incumple con los requisitos";
    textNoResult.textContent =
      "El mensaje debe ser ingresado en minusculas y sin incluir caracteres especiales";
  } else {
    sectionNoResult.classList.add("d-none");
    divResult.classList.remove("d-none");
    document.querySelector("#texto-resultado").textContent = encriptar(mensaje);
  }
}

function llamadaDesencriptar() {
  let sectionNoResult = document.querySelector("#div-no-resultado");
  let titleNoResult = document.querySelector("#p-no-title");
  let textNoResult = document.querySelector("#p-no-p");
  let divResult = document.querySelector("#div-resultado");

  let mensaje = document.querySelector("#mensaje").value;
  let pattern = /[^a-z ]/;
  let resultado = mensaje.match(pattern);

  if (resultado != null) {
    divResult.classList.add("d-none");
    sectionNoResult.classList.remove("d-none");
    titleNoResult.textContent =
      "El mensaje ingresado incumple con los requisitos";
    textNoResult.textContent =
      "El mensaje debe ser ingresado en minusculas y sin incluir caracteres especiales";
  } else {
    let mensajeDesencriptado = desencriptar(mensaje);
    if (mensajeDesencriptado == "400") {
      divResult.classList.add("d-none");
      sectionNoResult.classList.remove("d-none");
      titleNoResult.textContent = "El mensaje no puede ser desencriptado";
      textNoResult.textContent =
        "El mensaje ingresado fue encriptado con reglas distintas";
    } else {
      sectionNoResult.classList.add("d-none");
      divResult.classList.remove("d-none");
      document.querySelector("#texto-resultado").textContent =
        mensajeDesencriptado;
    }
  }
}

function encriptar(mensaje) {
  let mensajeEncriptado = "";

  for (let letra of mensaje) {
    switch (letra) {
      case "a":
        mensajeEncriptado += "ai";
        break;
      case "e":
        mensajeEncriptado += "enter";
        break;
      case "i":
        mensajeEncriptado += "imes";
        break;
      case "o":
        mensajeEncriptado += "ober";
        break;
      case "u":
        mensajeEncriptado += "ufat";
        break;
      default:
        mensajeEncriptado += letra;
    }
  }
  return mensajeEncriptado;
}

function desencriptar(mensaje) {
  let mensajeDesencriptado = "";

  for (let i = 0; i < mensaje.length; i++) {
    letra = mensaje[i];
    switch (letra) {
      case "a":
        if (mensaje[++i] == "i") {
          mensajeDesencriptado += "a";
        } else {
          return "400";
        }
        break;
      case "e":
        if (
          mensaje[++i] == "n" &&
          mensaje[++i] == "t" &&
          mensaje[++i] == "e" &&
          mensaje[++i] == "r"
        ) {
          mensajeDesencriptado += "e";
        } else {
          return "400";
        }
        break;
      case "i":
        if (mensaje[++i] == "m" && mensaje[++i] == "e" && mensaje[++i] == "s") {
          mensajeDesencriptado += "i";
        } else {
          return "400";
        }
        break;
      case "o":
        if (mensaje[++i] == "b" && mensaje[++i] == "e" && mensaje[++i] == "r") {
          mensajeDesencriptado += "o";
        } else {
          return "400";
        }
        break;
      case "u":
        if (mensaje[++i] == "f" && mensaje[++i] == "a" && mensaje[++i] == "t") {
          mensajeDesencriptado += "u";
        } else {
          return "400";
        }
        break;
      default:
        mensajeDesencriptado += letra;
    }
  }

  return mensajeDesencriptado;
}

function copiarPortapapeles() {
  let codigoACopiar = document.querySelector("#texto-resultado");
  var seleccion = document.createRange();
  seleccion.selectNodeContents(codigoACopiar);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(seleccion);
  var res = document.execCommand("copy");
  window.getSelection().removeRange(seleccion);
  alert("Copiado al portapapeles");
}
