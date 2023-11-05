// constructor function: maquette ou modele qui nous permet de creer des objets

function Utilisateur(noms, email, ...amis) {
  this.noms = noms;
  this.email = email;
  this.amis = amis;
  this.login = function () {
    console.log(`${email} est connecté(e)`);
  };
  this.logout = function () {
    console.log(`${email} est deconnecté(e)`);
  };
}

//instanciation avec le mots clés new
const util1 = new Utilisateur(
  "Musole Louis",
  "musole@gmail.com",
  "Dody",
  "Mira"
);
const util2 = new Utilisateur("Zack Mwikasa", "zack@gmail", "Job", "Charlie");
const util3 = new Utilisateur("Hilaire Guy", "guy@gmail.com", "Tarzan");
const util4 = new Utilisateur(
  "Jack Ma",
  "jack@gmail.com",
  "Elon Musk",
  "Bill Gates"
);
console.log(util1);
console.log(util2);
console.log(util3);
console.log(util4);

//accedre aux methodes
util1.login();
util2.logout();
