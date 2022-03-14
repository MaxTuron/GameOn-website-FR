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
const modalBtnClose = document.querySelectorAll(".close, .btn-close");
const form = document.getElementById('form');

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

//Affiche le message de confirmation
function modalMessageLaunch(){
  modalmessage.style.display = "block";
}

//Empeche l'envoie du formulaire
form.addEventListener('submit', function(event){
  event.preventDefault()
});

// Fonction vérifie les champs du formulaire
function validate() {

  let inputFirstName = document.getElementById("first"),
      inputLastName = document.getElementById("last"),
      inputEmail = document.getElementById("email"),
      inputBirthdate = document.getElementById("birthdate"),
      inputQuantity = document.getElementById("quantity");

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
    inputFirstName.className = "text-control-border";
  }else if (firstName.length===0) {
    firstNameError.innerHTML = "Vous devez écrire votre prénom.";
    inputFirstName.className = "text-control-border";
  }else if(firstRegex===true){
    firstNameError.innerHTML = "Le prénom ne doit pas contenir de nombres.";
    inputFirstName.className = "text-control-border";
  }else{
    firstNameValid = true;
    firstNameError.innerHTML = "";
    inputFirstName.className = "text-control";
  }

//Gestion du nom
  if(lastName.length<2 && lastName.length !== 0){
    lastNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    inputLastName.className = "text-control-border";
  }else if (lastName==="") {
    lastNameError.innerHTML = "Vous devez écrire votre nom.";
    inputLastName.className = "text-control-border";
  }else if(lastRegex===true){
    lastNameError.innerHTML = "Le nom ne doit pas contenir de nombres.";
    inputLastName.className = "text-control-border";
  }else{
    lastNameValid = true;
    lastNameError.innerHTML = "";
    inputLastName.className = "text-control";
  }

//Gestion de l'email
  if (email==="") {
    emailError.innerHTML = "Vous devez remplir ce champ.";
    inputEmail.className = "text-control-border";
  }else if(emailRegex===false){
    emailError.innerHTML = "Vous devez remplir une adresse email valide.";
    inputEmail.className = "text-control-border";
  }else{
    emailValid = true;
    emailError.innerHTML = "";
    inputEmail.className = "text-control";
  }

  //Gestion de la date de naissance
  if (birthdate==="") {
    birthdateError.innerHTML = "Vous devez entrer votre date de naissance.";
    inputBirthdate.className = "text-control-border";
  }else {
    birthdateValid = true;
    birthdateError.innerHTML = "";
    inputBirthdate.className = "text-control";
  }

  //Gestion de la quantité de concours
  if (quantity==="") {
    quantityError.innerHTML = "Vous devez remplir le nombre de tournois.";
    inputQuantity.className = "text-control-border";
  }else if(quantityRegex===false){
    quantityError.innerHTML = "Un nombre doit être saisi.";
    inputQuantity.className = "text-control-border";
  }else {
    quantityValid = true;
    quantityError.innerHTML = "";
    inputQuantity.className = "text-control";
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

//Fonction pour réinitialiser le formulaire -- Optionnel
function reset() {
  document.getElementById("form").reset();
}

