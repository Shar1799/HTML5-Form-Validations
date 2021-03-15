/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Asignación de variables
const numeroTarjeta = document.getElementById("numeroTarjeta");
const codigo = document.getElementById("codigo");
const monto = document.getElementById("monto");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const ciudad = document.getElementById("ciudad");
const estado = document.getElementById("estado");
const postal = document.getElementById("postal");
const mensaje = document.getElementById("mensaje");
const submit = document.getElementById("btnEnviar"); //Botón enviar
const form = document.getElementById("formulario"); //Formulario
const errorElemento = document.getElementById("error"); //error

window.onload = function() {
  form.addEventListener("submit", e => {
    //Variable que contiene el mensaje de error
    let msj = [];

    //Espacio de numeroTarjeta
    if (numeroTarjeta.value === "" || numeroTarjeta.value == null) {
      msj.push("Por favor, escriba su número de tarjeta.");
    }
    //Espacio de codigo
    if (codigo.value === "" || codigo.value == null) {
      msj.push("Por favor, escriba su código.");
    }
    //Espacio de monto
    if (monto.value === "" || monto.value == null) {
      msj.push("Por favor, escriba el monto.");
    }
    //Espacio de nombre
    if (nombre.value === "" || nombre.value == null) {
      msj.push("Por favor, escriba su nombre.");
    }

    //Espacio de apellido
    if (apellido.value === "" || apellido.value == null) {
      msj.push("Por favor, escriba su apellido.");
    }

    //Espacio de ciudad
    if (ciudad.value === "" || ciudad.value == null) {
      msj.push("Por favor, escriba su ciudad.");
    }

    //Espacio de estado
    if (estado.value === "" || estado.value == null) {
      msj.push("Por favor, escriba su Estado.");
    }

    //Espacio de postal
    if (postal.value === "" || postal.value == null) {
      msj.push("Por favor, escriba su código postal.");
    }

    //Espacio de mensaje
    if (mensaje.value === "" || mensaje.value == null) {
      msj.push("Por favor, escriba un mensajes.");
    }

    //PreventDefault()
    if (msj.length > 0) {
      e.preventDefault();
      errorElemento.innerText = msj(", ");
    }
  });
};
