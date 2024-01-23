/* Kombinations_Övning
Övning 1
Uppgift: Filtrera och bearbeta data om produkter

Du har en array med produktobjekt, där varje objekt representerar en produkt med egenskaper som namn, pris och tillgänglighet. Din uppgift är att skapa en funktion som:

1 : Filtrerar ut de produkter som är tillgängliga.

2 : Beräknar momsen för varje produkt baserat på priset.

3 : Returnerar en ny array med produkter som innehåller namnet, det uppdaterade priset med moms och en status som anger om priset är högt (över 100) eller lågt (100 eller mindre). Om varan kostar mer än 100kr så anses priset vara högt

// Array med produktobjekt
// momsen är 25% av priset'
*/


const products = [
  { name: "Laptop", price: 1200, available: true },
  { name: "Mouse", price: 25, available: true },
  { name: "Keyboard", price: 60, available: false },
  { name: "Monitor", price: 150, available: true },
]; 

/* let articles = products.filter (article => article.available === true)
console.log(articles) */


/* let momsPrice = products.map (article => article.name + " " + article.price / 4 )
console.log(momsPrice)  */

let momsPrice = products.map (article => ({ 
    name: article.name,
    moms: article.price * 1.25,
    isExpensive: article.price > 100 ? "dyrt" : "billigt"

}));

console.log (momsPrice)

