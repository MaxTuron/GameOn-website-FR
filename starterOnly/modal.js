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
}

//Empeche l'envoie du formulaire
form[0].addEventListener('submit', (e) => {
  e.preventDefault();
});

// Fonction vérifie les champs du formulaire
function validate() {

  let firstName = document.getElementById("first").value,
      lastName = document.getElementById("last").value,
      email = document.getElementById("email").value,
      birthdate = document.getElementById("birthdate").value,
      quantity = document.getElementById("quantity").value,
      firstRegex = /[0-9]/.test(firstName),
      lastRegex = /[0-9]/.test(lastName),
      emailRegex = /@/.test(email),
      quantityRegex = /\d/.test(quantity);

  let firstNameError = document.getElementById("firstNameError"),
      lastNameError = document.getElementById("lastNameError"),
      emailError = document.getElementById("emailError");

  let firstNameValid = false,
      lastNameValid = false,
      emailValid = false,
      birthdateValid = false,
      quantityValid = false,
      checkboxValid = false;

//Gestion du prénom
  if(firstName.length<2 && firstName.length !== 0 ){
    firstNameError.innerHTML = "Votre prénom doit avoir plus de deux lettres.";
  }else if (firstName.length===0) {
    firstNameError.innerHTML = "Vous devez écrire votre prénom.";
  }else if(firstRegex===true){
    firstNameError.innerHTML = "Le prénom ne doit pas contenir de nombres.";
  }else{
    firstNameValid = true;
  }

//Gestion du nom
  if(lastName.length<2 && lastName.length !== 0){
    lastNameError.innerHTML = "Votre nom doit avoir plus de deux lettres.";
  }else if (lastName==="") {
    lastNameError.innerHTML = "Vous devez écrire votre nom.";
  }else if(lastRegex===true){
    lastNameError.innerHTML = "Le nom ne doit pas contenir de nombres.";
  }else{
    lastNameValid = true;
  }

//Gestion de l'email
  if (email==="") {
    emailError.innerHTML = "Vous devez remplir ce champ.";
  }else if(emailRegex===false){
    emailError.innerHTML = "Vous devez remplir une adresse email valide.";
  }else{
    emailValid = true;
  }

  //Gestion de la date de naissance
  if (birthdate==="") {
    alert("La date de naissance ne doit pas être vide.");
  }else {
    birthdateValid = true;
  }

  //Gestion de la quantité de concours
  if (quantity==="") {
    alert("Le nombre de concours ne doit pas être vide.");
  }else if(quantityRegex===false){
    alert("Un nombre doit être saisi.");
  }else {
    quantityValid = true;
  }


  //Vérification condition d'utilisation checked
  if (document.getElementById('checkbox1').checked) {
    checkboxValid = true;
  }else{
    alert ('Veuillez cocher la case des conditions d\'utilisations pour vous inscrire');
  }

    //Verification finale de tous les champs
  if(firstNameValid && lastNameValid && emailValid && birthdateValid && quantityValid && checkboxValid){
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".confirm").style.display = "block";
  }
}

//Fonction pour réinitialiser le formulaire
function reset() {
  document.getElementById("form").reset();
}

