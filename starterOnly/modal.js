function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalmessage = document.querySelector(".confirm");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementsByName('reserve');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtnClose.forEach((span) => span.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal
function closeModal() {
  modalbg.style.display = "none";
  modalmessage.style.display = "none";
}

function modalMessageLaunch(){
  modalmessage.style.display = "block";
}

//Empeche l'envoie du formulaire
form[0].addEventListener('submit', (e) => {
  e.preventDefault();
});

// Fonction vérifie les champs du formulaire
function validate() {

  //Déclaration et récupération des variables et des regex
  let firstName = document.getElementById("first").value,
      lastName = document.getElementById("last").value,
      email = document.getElementById("email").value,
      birthdate = document.getElementById("birthdate").value,
      quantity = document.getElementById("quantity").value,
      firstRegex = /[0-9]/.test(firstName),
      lastRegex = /[0-9]/.test(lastName),
      emailRegex = /@/.test(email),
      quantityRegex = /\d/.test(quantity);

  //Déclaration des messages d'erreurs
  let firstNameError = document.getElementById("firstNameError"),
      lastNameError = document.getElementById("lastNameError"),
      emailError = document.getElementById("emailError"),
      birthdateError = document.getElementById("birthdateError"),
      quantityError = document.getElementById("quantityError"),
      cityError = document.getElementById("cityError"),
      checkboxError = document.getElementById("checkboxError");

  //Déclaration des variables pour la validation finale des champs
  let firstNameValid = false,
      lastNameValid = false,
      emailValid = false,
      birthdateValid = false,
      quantityValid = false,
      cityValid = false,
      checkboxValid = false;

//Gestion du prénom
  if(firstName.length<2 && firstName.length !== 0 ){
    firstNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  }else if (firstName.length===0) {
    firstNameError.innerHTML = "Vous devez écrire votre prénom.";
  }else if(firstRegex===true){
    firstNameError.innerHTML = "Le prénom ne doit pas contenir de nombres.";
  }else{
    firstNameValid = true;
    firstNameError.innerHTML = "";
  }

//Gestion du nom
  if(lastName.length<2 && lastName.length !== 0){
    lastNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }else if (lastName==="") {
    lastNameError.innerHTML = "Vous devez écrire votre nom.";
  }else if(lastRegex===true){
    lastNameError.innerHTML = "Le nom ne doit pas contenir de nombres.";
  }else{
    lastNameValid = true;
    lastNameError.innerHTML = "";
  }

//Gestion de l'email
  if (email==="") {
    emailError.innerHTML = "Vous devez remplir ce champ.";
  }else if(emailRegex===false){
    emailError.innerHTML = "Vous devez remplir une adresse email valide.";
  }else{
    emailValid = true;
    emailError.innerHTML = "";
  }

  //Gestion de la date de naissance
  if (birthdate==="") {
    birthdateError.innerHTML = "Vous devez entrer votre date de naissance.";
  }else {
    birthdateValid = true;
    birthdateError.innerHTML = "";
  }

  //Gestion de la quantité de concours
  if (quantity==="") {
    quantityError.innerHTML = "Vous devez remplir le nombre de tournois.";
  }else if(quantityRegex===false){
    quantityError.innerHTML = "Un nombre doit être saisi.";
  }else {
    quantityValid = true;
    quantityError.innerHTML = "";
  }

  // Vérification du champ CHOIX DE VILLES
  if (document.querySelectorAll('[name="location"]:checked').length < 1) {
    cityError.innerHTML = "Vous devez préciser dans quelle ville etait ces évènements.";
  } else {
    cityValid = true;
    cityError.innerHTML = "";
  }


  //Vérification condition d'utilisation checked
  if (document.getElementById('checkbox1').checked) {
    checkboxValid = true;
    checkboxError.innerHTML = "";
  }else{
    checkboxError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
  }

    //Verification finale de tous les champs
  if(firstNameValid && lastNameValid && emailValid && birthdateValid && quantityValid && cityValid && checkboxValid){
    closeModal();
    modalMessageLaunch();
    reset();
  }
}

//Fonction pour réinitialiser le formulaire
function reset() {
  document.getElementById("form").reset();
}

