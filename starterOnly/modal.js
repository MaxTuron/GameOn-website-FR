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
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Fonction vérifie les chaps du formulaire
function validate() {
  let firstName = document.getElementById("first").value,
      lastName = document.getElementById("last").value,
      email = document.getElementById("email").value,
      birthdate = document.getElementById("birthdate").value,
      quantity = document.getElementById("quantity").value,
      firstRegex = /[0-9]/.test(firstName),
      lastRegex = /[0-9]/.test(lastName),
      emailRegex = /@/.test(email);

  let firstNameValid = false,
   lastNameValid = false,
   emailValid = false,
   birthdateValid = false,
   quantityValid = false;

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(birthdate);
  console.log(quantity);

//Gestion du prénom
  if(firstName.length<2){
    alert("Le prénom doit faire plus de deux caractères.");
  }else if (firstName==="") {
    alert("Le prénom ne doit pas être vide.");
  }else if(firstRegex===false){
    alert("Le prenom ne doit pas contenir de nombres.");
  }else{
    firstNameValid = true;
  }

//Gestion du nom
  if(lastName.length<2){
    alert("Le nom doit faire plus de deux caractères.");
  }else if (lastName==="") {
    alert("Le nom ne doit pas être vide.");
  }else if(lastRegex===false){
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
    alert("L'email ne doit pas être vide.");
  }else {
    birthdateValid = true;
  }


  //Verification finale de tous les champs
  if(firstNameValid===true && lastNameValid===true && emailValid===true && birthdateValid===true && quantityValid===true){
    alert("Form OK")
  }else{
    alert("Erreur")
  }
}

//Fonction pour réinitialiser le formulaire
function reset() {
  document.getElementById("form").reset();
}

