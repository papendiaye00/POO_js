//Encapsulation des propriétes et des fonctions dans un meme objet

const utilisateur = {
  noms: "Musole Louis",
  email: "musole@gmail.com",
  amis: ["Steven", "Jonathan"],

  login() {
    console.log(`${this.email} est connecté(e)`);
  },
  logout() {
    console.log(`${this.email} est déconnecté(e)`);
  },
};

console.log(utilisateur);

//Acceder au propriété d'un objet
console.log(utilisateur.noms);
console.log(utilisateur.email);

console.log(utilisateur["noms"]);
console.log(utilisateur["email"]);

//reaffectation de valeur d'un objet
utilisateur.noms = "Blaise king";
utilisateur["email"] = "blaise@gmail.com";

console.log(utilisateur);
