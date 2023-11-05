// Value types (ou primitive types)
//(Ces differentes types sont: Number, String, Boolean, Null, Undefined)
// ce sont ces types qu'on appelle les velues types
let  x = 10;
let y = x;
console.log(x, y);

x = 20; 
console.log (x, y);

//Reference types (c'est lorqu'on a les objets et les tableaux)
let a = {valeur : 10}; // objet littéral
let b = a;
console.log(a, b);

a.valeur = 20;
console.log(a, b);

