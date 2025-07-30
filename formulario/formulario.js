document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let correo = document.getElementById("correo").value;
  let pais = document.getElementById("pais").value;
  let password = document.getElementById("password").value;
  let nombresRegex = /^[a-z\sáéíóú']{3,20}$/i;
  let correoRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  let paisRegex = /^[a-z\sáéíóú']{3,20}$/i;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!*.[\]#@&])[a-zA-Z\d!*.[\]#@&]{8,30}$/;
  
  if(validar_input("Nombre", nombre, nombresRegex) &&
    validar_input("Apellido", apellido, nombresRegex) &&
    validar_input("Correo", correo, correoRegex) &&
    validar_input("País", pais, paisRegex) &&
    validar_input("Contraseña", password, passwordRegex)) {
    alert("Formulario enviado correctamente.");
  }
});

function validar_input(nombre, valor, regex) {
  if (!valor) {
    alert(`El campo ${nombre} no puede estar vacío.`);
    return false;
  } else if (!regex.test(valor)) {
    alert(`El campo ${nombre} es inválido.`);
    return false;
  } else return true;
}
