//factory function: c'est un maquette ou un model qui nous permet de creer des objets

//le modele
const utilisateur = (noms, email, ...amis) => {
  return {
    noms,
    email,
    amis,

    login() {
      console.log(`${email} est connecté(e)`);
    },
    logout() {
      console.log(`${email} est deconnecté   (e)`);
    },
  };
};
const util1 = utilisateur(
  "Musole Louis",
  "musole@gmail.com",
  "Gloire",
  "Esther"
);
const util2 = utilisateur("Blaise Tonton", "tonton@gmail.com", "Yvette");
const util3 = utilisateur(
  "Jonathan Jigy",
  "jonathan@gmail.com",
  "Senga",
  "Clara"
);

console.log(util1);
console.log(util2);
console.log(util3);

util1.login();
util1.logout();

util2.login();
util2.logout();

util3.login();
util3.logout();
