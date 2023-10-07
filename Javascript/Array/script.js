


/* console.log ("hello world") 

let pokemons = ["Charmander", "Balbasaur", "Ratata", "Ekans"];
console.log(pokemons);

pokemons.push("Squirtle", "Pikachu");
console.log(pokemons)

let remove = pokemons.pop();
console.log(remove);

let positionToRemove = pokemons.indexOf("Balbasaur");
pokemons.splice(positionToRemove, 1); // 1an är för hur många objekt man skall ta bort

console.log(pokemons) */



// Sortera listan efter storlek
/* let lista = [1, 4, 3, 55, 34, 2, 19, 25,15, 9];

console.log(lista.sort((a, b) => a - b)); */


 /********************** Array ************************************/

           /*  1. Gör en array som innehåller 5 st olika frukter av datatypen string. */
            const frukter = ["äpple", "banan", "apelsin", "kiwi", "jordgubbe"];
            
          /*  /* 2. gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
            const blandadArray = ["Hej!", 42, [1, 2, 3]];

        /* 3. console.log() hur många objekt arrayen ovan innehåller */
            console.log(blandadArray.length) 

          /* 4. I arrayen ovan, hämta äpple. */

          console.log(frukter[0]);


        /* 5. I arrayen ovan, hämta jordgubbe.*/
        console.log (frukter[4]);

        /* 6 I arrayen ovan, byt ut banan mot citron.*/
        frukter[1] = "citron"
        console.log (frukter);
        
        /* 7. Lägg ihop två arrayer*/ 
        let a = [1,2,3];
        let b = [4,5,6];

        let ab = (a+","+ b);
        console.log (ab);

       /* 8. Merga ner array b på index 3 array a.*/
        let c = [1,2,3,7,8,9];
        let d = [4,5,6];

        c.splice(3, 0, ...d);
        console.log(c);
        
        /* 9. clona en array, två varianter */

        let arr = ['a', 'b', 'c'];
        let klonadArr = [...arr]; //Alternativ 1

        let klonadArr2 = arr.slice(); //Alternativ 2

        klonadArr.push('d'); // Testade att lägga till 'd' i en klonad version av min array
        console.log (klonadArr); // Skriver ut clonad array + nytt 'd' i min array


        /*********** Methods **************/

        let fruits = ['kiwi', 'apple', 'pear'];

        // 10. Lägg till en frukt i slutet av arrayen ovan.
        fruits.push('citron')
        console.log (fruits)

        // 11. Lägg till en frukt i början av arrayen
        let nyttElement = ('Melon')
        fruits.unshift(nyttElement);
        console.log (fruits);
         
        // 12. I arrayen ovan, ta bort sista frukten i arrayen.
        fruits.pop();
        console.log (fruits);

        // 13. Ta bort första frukten i arrayen.
        fruits.shift();
        console.log(fruits);

        // 14. Sätt in en frukt i arrayen ovan på index 1.
       
        fruits.splice(1, 0, 'Testa');
        console.log (fruits);

        // 15. Sätt tre frukter i arrayen ovan på index 2
        
        fruits.splice(1, 0, 'Apelsin', 'Tomat', 'Paprika');
        console.log (fruits);


        let names = ['David', 'Christoffer', 'Johan', 'Maja']
        // 16. I arrayen ovan, ta bort Christoffer och Johan

        names.splice(1, 2);
        console.log (names);

        let nums = [1,2,3,4,5,6,7,8,9];
        // 17.spegelvänd arrayen ovan
        nums.reverse()
        console.log('Methods 17', nums)
        /* console.log(nums.sort((a, b) => b - a)); */ // egen variant 

        
        let str = 'Supercalifragilisticexpialidocious';
        
        // 18. Kolla om strängen ovan innehåller bokstaven n
        if (str.includes('n')) {
            console.log('Strängen innehåller bokstaven "n".');
        } else {
            console.log('Strängen innehåller inte bokstaven "n".');
        }   
        
        // 19. Kika om strängen ovan innehåller bokstaven x.
        if (str.includes('x')) {
            console.log('Strängen innehåller bokstaven "x".');
        } else {
            console.log('Strängen innehåller inte bokstaven "x".');
        } 


        // 20. I ovanstående array, hitta vilket position första förekomsten av p har.
        let position = str.indexOf('p');

        if (position !== -1) {
        console.log(`Första förekomsten av 'p' finns på position ${position+1}.`);
        } else {
        console.log('Bokstaven "p" finns inte i strängen.');
        }


        // 21. I strängen ovan, plocka fram de 5 första tecknena.
    

        let deForstaTecknen = str.substring(0, 5);

        console.log(deForstaTecknen);

        // 22.  strängen ovan, plocka fram de 7 sista tecknena.

        let deSistaSjuTecknen = str.slice(-7);

        console.log(deSistaSjuTecknen); // Resultat: 'docious'


        
        let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
        
        // 23. I arrayen ovan, filtera fram alla nummer över 5 
        let nummerOverFem = numArray.filter(num => num > 5);

        console.log(nummerOverFem);

        // 24. I arrayen ovan, filtera fram alla nummer under 5.
        let nummerUnderFem = numArray.filter(num => num < 5);
        console.log(nummerUnderFem);

        // 25. Skriv ut alla namn som är 18 år eller över från arrayen ovan.
        let persons = [
            {
                name: "Felicia",
                age: 12
            },
            {
                name: "Pelle",
                age: 20
            },
            {
                name: "Peter",
                age: 59
            },
            {
                name: "Anna",
                age: 32
            },
            {
                name: "Jocke",
                age: 18
            },
            {
                name: "Ella",
                age: 3
            }
        ];
        
        console.log("Personer som är 18 år eller äldre:");
        
        persons.forEach(person => {
          if (person.age >= 18) {
            console.log(person.name);
          }
        });

        // 26. Under 18
        console.log("Personer som är under 18 år");

        persons.forEach(person => {
            if (person.age < 18) {
                console.log(person.name)
            }
        })


        let arr1 = ['beta', 'alfa', 'gamma'];
        // 27. Sortera ovanstående array alfabetisk ordning  
         arr1.sort();
         console.log(arr1);

  

        let nums1 = [1,5,7,9,3,4,2,6,8];
        
        // 28. Sortera ovanstående array numeriskt.
        console.log(nums1.sort((a, b) => a - b));

        // 29. I person-arrayen ovan, sortera objekten efter ålder, yngst först.
        persons.sort((a,b) => a.age - b.age);
        console.log(persons);
        
        // 30. äldst först
        persons.sort((a,b) => b.age - a.age);
        console.log(persons);
       
        // 31. I person-arrayen ovan, sortera objekten i bokstavsordning efter deras namn
        persons.sort((a, b) => a.name.localeCompare(b.name));
        console.log(persons);

        // 32. I person-arrayen ovan, gör om alla namn till versaler.
        persons.forEach(person => {
            person.name = person.name.toUpperCase();
          });
          
          console.log(persons);

        // 33. I person-arrayen ovan, spegelvänd alla namn.
        let spegelvandaNamn = persons.map(person => ({
        name: person.name.split('').reverse().join(''),
        age: person.age
        }));
          
          console.log(spegelvandaNamn);
        // 34. Loopa ut följande array med en forEach()-loop. console.log() varje ord.
        
        let fruits2 = ['apelsin', 'päron', 'äpple', 'kiwi'];
         
        fruits2.forEach(frukt => {
            console.log(frukt);
          }); 

        // 35. Loopa ut följande array med en for of-loop. console.log() varje ord.
        for (let frukt of fruits2) {
            console.log(frukt);
          }

        // 36. Loopa ut följande array med en for-loop. console.log() varje ord.
        for (let i = 0; i < fruits2.length; i++) {
        console.log(fruits2[i]);
        }       

        // 37. Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex:
        // 0 - apelsin
        // 1 - päron

            for (let i = 0; i < fruits2.length; i++) {
            console.log(i+1 + ' - ' + fruits2[i]);
          }