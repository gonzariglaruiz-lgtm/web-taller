// Seleccionar el botón y el body
const btnTheme = document.querySelector("#btn-theme");
const body = document.querySelector("body");

console.log("JavaScript cargado");
console.log(btnTheme);
console.log(body);

// Cambiar el tema de la página
btnTheme.addEventListener("click", function() {
    console.log("S'ha fet clic al botó");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        btnTheme.textContent = "Mode Clar";
    } else {
        btnTheme.textContent = "Mode Fosc";
    }
});

// Seleccionar el formulario
const form = document.querySelector("form");
console.log(form);

// Validar el formulario
form.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Enviament del formulari interceptat! La pàgina NO s'ha recarregat.");

    // Seleccionar los campos
    const nom = document.querySelector("#nom");
    const correu = document.querySelector("#email");
    
    // Guardar los valores
    const valorNom = nom.value.trim();
    const valorCorreu = correu.value.trim();

    // Quitar los bordes rojos anteriores
    nom.style.border = "";
    correu.style.border = "";

    let error = false;

    // Validar el nombre
    if (valorNom === "") {
        nom.style.border = "2px solid red";
        console.log("Avís: el camp Nom és obligatori.");
        error = true;
    }

    // Validar el correo
    if (
        valorCorreu === "" ||
        !valorCorreu.includes("@") ||
        !valorCorreu.includes(".")
    ) {
        correu.style.border = "2px solid red";
        console.warn("Avís: el correu està buit o no conté @ o punt.");
        alert("Avís: el correu està buit o no conté @ o punt.");
        error = true;
    }

    // Mostrar el resultado
    if (error) {
        console.log("Revisa els camps marcats en roig.");
    } else {
        console.log("Tots els camps s'han omplit correctament.");
    }
});