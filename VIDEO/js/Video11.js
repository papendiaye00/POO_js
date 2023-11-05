//le Prototype (__proto__) est un object qui regroupe l'ensemble des methodes d'un objet
function Utilisateur(noms, email, ...amis) {
 this.noms = noms;
 this.email = email;
 this.amis = amis;
}
//Lier une methode à un  prototype
Utilisateur.prototype.login = function(){
 console.log(`${email} est connecté(e)`);
}
Utilisateur.prototype.logout = function(){
 console.log(`${email} est déconnecté(e)`);
}
//instanciation
const util1 = new Utilisateur('Musole Louis', 'musole@gmail.com', 'Dody', 'Mira');

console.log(util1);