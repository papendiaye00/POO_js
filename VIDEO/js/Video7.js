//L'abstraction c'est se baser sur l'essentiel et non sur le détail
function Employer(noms, age, sexe, salaire){
 this.noms = noms;
 this.age = age;
 this.sexe = sexe;
 this.salaire = salaire;

 //les details qui sont privé pour chaque employer
 const allocation = 7000;
 const primeDeRisque = 600;
 const calculSalaire = function(){
 console.log(`Le salaire final est: ${salaire + allocation + primeDeRisque}`);
 }

 this.infoEmployer = function(){
     console.log(`Noms : ${this.noms}`);
     console.log(`Age : ${this.age}`);
     console.log(`Sexe : ${this.sexe}`);
     console.log(`Salaire : ${this.salaire}`);
     calculSalaire();
 }
}
//Instanciation
const emp1 = new Employer('Daniel Cruz', 30, 'M', 50000);
const emp2 = new Employer('Fiona Gallagher', 45, 'F', 90000);

//L'essentiel des informations que l'employer a besoin
emp1.infoEmployer();
emp2.infoEmployer();