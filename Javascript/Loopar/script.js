/* 
1. Skapa en loop som itererar 100 varv. För varje iteration ska du console.log() vilket varv du är på.

for (let i = 0; i <= 100; i = i + 1) //Kan också använda i++ 
{ 
console.log(`i`, i); 
} */

const fruit2 = [`äpple`, `banan`, `apelsin`, `jordgubbar`, `kiwi`]

for (let i = 0; i < fruit2.length; i++) {
    console.log(fruit2[i]);
}

const kostnader = [10000, 2000, 800, 1000, 5000, 4000]
let summa = 0;
for(let i = 0; i < kostnader.length; i++){
    
    summa += kostnader[i];
}

console.log(`totala kostnader ${summa}kr` );

/* 2. Skapa en loop som räknar ner från 100 till 0. För varje varv ska du console.log() 
vilket varv du är på. */
for (let i = 100; i >= 0; i--) {
    console.log('Varv ' + i);
  }

  let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
// 3. Loopa ut ovanstående array med en for-loop. 
// För varje varv ska du console.log() innehållet ( frukten ).

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }

  /* 4. Loopa ut ovanstående array med console.log(). 
  Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv. */


for (let i = 0; i < fruits.length; i++) {
  console.log(i + '. ' + fruits[i]);
}


/* 5. Skapa en enkel tabell för multiplikation av ett nummer, 
till exempel 7:console.log() sjuans gångertabell Ex. */
let nummer = 7;

console.log('Sjuans gångertabell:');

for (let i = 1; i <= 10; i++) {
  let produkt = nummer * i;
  console.log(produkt);
}

const frukter = ["äpple", "banan", "apelsin", "jordgubbe", "kiwi"];
 for ()