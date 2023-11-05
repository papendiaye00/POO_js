//Une Classe est une maquette ou modele qui permet de créer des objects et son nom commence tjrs par une lettre majuscule
class Utilisateur {
 //Un constructeur est une fonction qui permet d'implemente les diferentes proprietés d'un object
 constructor(noms, email, ...amis){
     this.noms = noms;
     this.email = email;
     this.amis = amis;
 }
 login(){
     console.log(`${this.email} est connecté(e)`);
 }
 logout(){
     console.log(`${this.email} est déconnecté(e)`);
 }
}
//Instanciation
const util1 = new Utilisateur('Musole Louis', 'musole@gmail.com', 'Alice', 'Grace');
const util2 = new Utilisateur('Blaise Huu', 'blaise@gmail.com', 'Jonathan');
console.log(util1);
console.log(util2);

util1.login();
util1.logout();

util2.login();
util2.logout();