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


// Fonction vérifie les chaps du formulaire
function validate() {
  let firstName = document.getElementById("first").value,
      lastName = document.getElementById("last").value,
      email = document.getElementById("email").value,
      birthdate = document.getElementById("birthdate").value,
      quantity = document.getElementById("quantity").value,
      cityCollection = document.getElementsByName("location"),
      firstRegex = /[0-9]/.test(firstName),
      lastRegex = /[0-9]/.test(lastName),
      emailRegex = /@/.test(email),
      quantityRegex = /\d/.test(quantity);

  let firstNameValid = false,
      lastNameValid = false,
      emailValid = false,
      birthdateValid = false,
      quantityValid = false,
      checkboxValid = false;

//Gestion du prénom
  if(firstName.length<2){
    alert("Le prénom doit faire plus de deux caractères.");
  }else if (firstName==="") {
    alert("Le prénom ne doit pas être vide.");
  }else if(firstRegex===true){
    alert("Le prenom ne doit pas contenir de nombres.");
  }else{
    firstNameValid = true;
  }

//Gestion du nom
  if(lastName.length<2){
    alert("Le nom doit faire plus de deux caractères.");
  }else if (lastName==="") {
    alert("Le nom ne doit pas être vide.");
  }else if(lastRegex===true){
    alert("Le nom ne doit pas contenir de nombres.");
  }else{
    lastNameValid = true;
  }

//Gestion de l'email
  if (email==="") {
    alert("L'email ne doit pas être vide.");
  }else if(emailRegex===false){
    alert("Le format de l'adresse Email n'est pas valide");
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

//Gestion des villes

//Vérification condition d'utilisation checked
    if (document.getElementById('checkbox1').checked) {
      checkboxValid = true;
    }else{
      alert ('Veuillez cocher la case des conditions d\'utilisations pour vous inscrire');
    }

  //Verification finale de tous les champs
  if(firstNameValid===true && lastNameValid===true && emailValid===true && birthdateValid===true && quantityValid===true && checkboxValid===true){
    alert("Form OK"),
    closeModal();
  }else{
    alert("Erreur")
  }
}

//Fonction pour réinitialiser le formulaire
function reset() {
  document.getElementById("form").reset();
}

