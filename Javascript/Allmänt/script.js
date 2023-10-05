
// decleration assignment
/* */

/*  let myName = "Johan";
console.log ("namn: ", myName);
const age = 33;

// Vad är en vilkorssats?

if(myName === "Johan") {
    console.log("javisst");
} else {
    console.log ("nej");
}

if (age < 30) {
    console.log("ung")
} else if (age > 35 && age <36) {
    console.log("rätt ålder")
} else {
    console.log("fel ålder");
}

const animal = "Rabbit";

switch(animal){
    case "DOG":
        console.log("Voff");
        break;
        case "CAT":
            console.log("mjau");
            break;
            case "FOX":
                console.log("mee");
                break;
                default:
                    console.log("Muu");


}

let a = 10;
let b = 20; 

if (a > b) {
    console.log("Sant")
} else {
    console.log ("Falskt")
}

let c = "apple";
let d = "pear";

if (c !== d) {
    console.log("Sant")
} else { 
    console.log ("Not the same")
}

let e = 30;
let f = 40;

if (e > f) {
    console.log(`${e} är störst`)
} else if (f > e){
    console.log (`${f} är störst`)
} else {
    console.log ("Dom är lika stora")
}

let g = 11;
if ( g % 2 == 0) {
    console.log ("talet är jämnt")
} else {
    console.log ("Talet är udda")
}

let h = 150;

if (h > 149) {
    console.log ("Du kan åka helix")
} else {
    console.log ("Du är för kort för att åka helix")
} */

/* let large = "large"
let platinum = "platinum"
let small = "small"
let medium = "medium"

const band = prompt("vilket åkband har du?")

if (band === large && platinum) {
    console.log ("Du kan åka balder")
} else if (band === small && medium) {
    console.log ("Du kan inte åka balder")
    
} */


/* const vikt = prompt ("Vikt i kg?")
const längd = prompt ("Längd i meter?")
const bmi = vikt/(längd * längd)


if (bmi > 30 ) {
    console.log ("Fetma")
} else if (bmi < 30 && bmi > 25 ) {
    console.log ("övervikt")
} else if ( bmi > 18,5 && bmi < 25) {
    console.log ("Normalvikt")
} else if (bmi < 18,5 ) {
    console.log ("Undervikt")
} */

// kroppsvikten i kg / (kroppslängden i meter * kroppslängden i meter) 

/* samla in vikt och längd i och spara datan i variabler */
// räkna ur BMI
// Skapa vilkorsats för de olika vikterna

/* let personHeight = 1.8;
let weight = 86; 
const bmi = weight / (personHeight * personHeight);
console.log(`BMI ${bmi}`);

if (bmi < 18.5 ){
    console.log("undervikt")
} else if (bmi >= 18.5 && bmi < 25){
    console.log("normalvikt");
} else if (bmi >= 25 && bmi < 30 ){
    console.log("Muskulös man");
} else {
    console.log("Fetma")
} */

/* const weekday = 2;

switch (weekday) {
        case 1: 
        console.log("måndag");
        break;
        case 2:
        console.log("tisdag");
        break;
        case 3:
        console.log("onsdag");
        break;
        case 4:
        console.log("torsdag");
        break;
        case 5:
        console.log("fredag");
        break;
        case 6:
        console.log("lördag");
        break;
        case 7:
        console.log("söndag");
        break;
    default:
    console.log ("Ogiltigt")
    } */

   
/*     console.log (`Före: `+ x)

    x = 12 
    var x
  
    console.log (`efter: ` + x)
   */

/*     let date = "2019-02-24";
    let date2 = "2018-01-01";

    function getYearFromDate (kalleAnka){
       const yearsFromString = kalleAnka.substr(0, 4);
       console.log(yearsFromString); 
       return "hela året " + yearsFromString;
    }

    console.log (getYearFromDate(date2)); */

   /*  const names = (vadsomhelst) => {
    const newBiggerName = vadsomhelst.toUpperCase ();
    return newBiggerName;

    };

    console.log(names("lilla fågel blå"));

    const myList = ["kalle", "hobbe", "anka", "nisse"]; 

    const listan = myList.map((vadsomhelst)=> {
        return vadsomhelst.toUpperCase();
    });

    console.log(listan) */

    /* "map"-funktionen används i en array eller lista för att ändra något på alla 
    värden. tex kan man ta hela listan *2 så dubblas alla värden */

    /****************************************************************************/


   /*  let mening = "Jag heter Johan";


    function getNameOfString (funktionen){
       const EndastNamn = funktionen.substr(10, 15);
       return "Endast namn " + EndastNamn;
    }

    console.log (getNameOfString(mening));

    let date = "2019-10-14";
    
    function onlyYear (year) {
        const inrefunktion = year.substr(0,4)
        return "Year " + inrefunktion; 
    }

    console.log  (onlyYear(date)); */










    /***************** UTRÄKNING AV REKTANGEL ************************/

  /* 1 skriv en funktion som returnerar en rektangels area:

     function exempel (x, y) {
        console.log("x är:", x)
        console.log("y är:", y)
        return x * y;
    }

    const z = exempel (100, 200)
    console.log (z + " kvadratmeter");









    /********************* TOM STRÄNG *************************/
 
/* 2 2: skriv en funktion som kontrollerar om en sträng är tom:

a)
    var minStrang = "";

    function arTomStrang(strang) {
        return strang.length === 0;
      }

    if (arTomStrang(minStrang)) {
      console.log("Strängen är tom.");
    } else {
      console.log("Strängen är inte tom.");
    }

/**********************************************/

/* b)

    function stringIsEmpty(string) {
    if( string.length === 0 ){
        return true 
    } else {
        return false
    }
}

const isEmpty1 = stringIsEmpty('')
console.log(`Är sträng 1 tom? ` + isEmpty1)

const isEmpty2 = stringIsEmpty('hej')
console.log(`Är sträng 1 tom? ` + isEmpty2) 


 */









/********************** POSITIVT ELLER NEGATIVT TAL ************************/

// 3: a) skriv en funktion som kontrollerar om ett nummer är positivt eller negativt:

    /*  function kontrolleraPositivtNegativt(nummer) {
        if (nummer > 0) {
          return "Positivt";
        } else if (nummer < 0) {
          return "Negativt";
        } else {
          return "Noll";
        }
      }

    const testNummer = -10;

    const resultat = kontrolleraPositivtNegativt(testNummer);
    console.log(resultat);   */
    /*Detta kommer att skriva ut 
    "Positivt" eftersom testNummer är större än 0.

    
/********************** Övning3 (annat alternativ) ************************/
/* 
b)

function checkIfNumberIsPosetive(number) {
    if( number > 0 ) {
        console.log(`Talet ${number} är positivt`) 
    } else if ( number < 0 ) {
        console.log(`Talet ${number} är negativt`)
    } else {
        console.log (`Talet 0 är varken positivt eller negativt`)
    }
}

checkIfNumberIsPosetive(500)
checkIfNumberIsPosetive(-2)
checkIfNumberIsPosetive(0)


 */








/******************************** FACTORIALT TAL ***************************************/

/*4: Skriv en funktion som kontrollerar summan av ett factorialt tal :
En factorial är en matematisk operation där du multiplicerar det givna talet med alla positiva heltal mindre än det.*/

 /* function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Funktion för att beräkna summan av n-fakultet (1! + 2! + 3! + ... + n!)
  function sumOfFactorials(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += factorial(i);
    }
    return sum;
  }

  var n = 170; // Du kan ändra n till det nummer du vill beräkna summan för.
var resultat = sumOfFactorials(n);
console.log("Summan av faktoriseringsvärden från 1 till " + n + " är: " + resultat); 
 */











/****************************** VILKET TAL ÄR STÖRST *****************************************/

/* 5. Här är ett JavaScript-program som tar emot tre numeriska värden 
från användaren och utvärderar vilket av dem som är störst: */


// Funktion för att ta emot numeriska värden från användaren
/* function mataInTal() {
    const tal1 = parseFloat(prompt("Ange det första talet:"));
    const tal2 = parseFloat(prompt("Ange det andra talet:"));
    const tal3 = parseFloat(prompt("Ange det tredje talet:"));
    return [tal1, tal2, tal3];
}

// Huvudprogrammet
function main() {
    const [tal1, tal2, tal3] = mataInTal();

    if (!isNaN(tal1) && !isNaN(tal2) && !isNaN(tal3)) 
    
    { 
         if (tal1 > tal2 && tal1 > tal3) {
            console.log("Det första talet är störst: " + tal1);
        } else if (tal2 > tal1 && tal2 > tal3) {
            console.log("Det andra talet är störst: " + tal2);

        } else if (tal3 > tal2 && tal3 > tal1) {
            console.log("Det tredje talet är störst: " + tal3);

        } else if (tal1 === tal2 && tal1 > tal3) {
            console.log("De två första talen är störst")
        } else if (tal1 === tal3 && tal1 > tal2) {
            console.log("Det första och tredje talet är störst")
        } else if (tal2 === tal3 && tal2 > tal1) {
            console.log("Det andra och tredje talet är störst")
        } else {
            console.log("Alla talen är lika stora")
        }
    } else {
        console.log("Felaktig inmatning. Var säker på att du anger numeriska värden.");
    }
}

main();
 */










/************************* KOLLA OM ETT ORD FINNS I MENING **********************************/

// 6. kolla om en sträng
// Inkludera ett visst ord. Gör ett program som tar en mening som argument 
// och kollar om den innehåller "javaScript"

/* function innehållerJavaScript(mening) {
    // Konvertera hela meningen till gemener (lowercase) för att göra jämförelsen fall-insensitiv.
    const gemener = mening.toLowerCase();
  
    // Använd indexOf() för att kontrollera om "javascript" finns i meningen.
    if (gemener.indexOf("javascript") !== -1) {
      return true;
    } else {
      return false;
    }
  }
  
  // Testa funktionen med en exempelmening.
  const mening = "Jag älskar att lära mig javascript.";
  if (innehållerJavaScript(mening)) {
    console.log("Meningen innehåller ordet 'JavaScript'.");
  } else {
    console.log("Meningen innehåller inte ordet 'JavaScript'.");
  }









  /***********************************************************************/

  //7: Temperatur
  //Gör ett program som konverterar Celsius till Fahrenheit

/*   function celsiusTillFahrenheit(celsius) {
    // Använd formeln för att utföra konverteringen.
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Testa funktionen med en temperatur i Celsius.
  const celsiusTemperatur = 1; // Ändra detta till önskad temperatur i Celsius.
  const fahrenheitTemperatur = celsiusTillFahrenheit(celsiusTemperatur);
  
  console.log(`${celsiusTemperatur}°C motsvarar ${fahrenheitTemperatur}°F.`); */










  /******************** MINIRÄKNARE ***************************************************/
  
  // 8. skriv en funktion som gör en grundläggande miniräknare av de 4 räknesätten:

  /* function miniRaknare(operation, tal1, tal2) {
    switch (operation) {
        case 'plus':
            return tal1+ tal2;
            case 'ganger':
                return tal1 * tal2;
                case 'minus':
                    return tal1- tal2;
                    case 'delat':
                        if (tal2 === 0) {
                            return 'kan inte dela med noll';
                        }
                        return tal1/ tal2;
                        default:
                            return 'ogiltig operation';
    }
}

  const plusResultat = miniRaknare('plus' , 100, 200);
  console.log('plus' , plusResultat);

  const gangerResultat = miniRaknare('ganger' , 200, -300);
  console.log('Gånger' , gangerResultat);

  const minusResultat = miniRaknare('minus' , 100, 300);
  console.log('minus' , minusResultat);

  const delatResultat = miniRaknare('delat' , 600, 3);
  console.log('delat' , delatResultat); */
  







  /*********************************** PALLINDROM ************************************/

// 9.skriv en funktion som kontrollerar om ordet är en pallidrom

/* function arPalindrom(ord) {
    //Ta bort mellandslag och konvertera till gemener (lovercase).
    ord = ord.toLowerCase().replace(/ /g, '');

    //Skapa en omvänd version av ordet.
    const omvantOrd = ord.split('').reverse().join('');

    return ord === omvantOrd;
}
//testa funktionen med olika ord
const ord1 = "Ola Salo";
const ord2 = "naturrutan";
const ord3 = "häst";

console.log(`Är "${ord1}" ett palindrom? ${arPalindrom(ord1)}`);
console.log(`Är "${ord2}" ett palindrom? ${arPalindrom(ord2)}`);
console.log(`Är "${ord3}" ett palindrom? ${arPalindrom(ord3)}`); */









  /***********************************************************************/

// 10. "Timmy och Sarah tror att de är förälskade, men runt där de bor kommer de bara att veta när de väljer varsin blomma.
// Om en av blommorna har ett jämnt antal blad och den andra har ett udda antal blad betyder det att de är förälskade.

// Skriv en funktion som tar antalet blad på varje blomma som inmatning
// och returnerar true om de är förälskade och false om de inte är det.

/* function inLove(blomma1, blomma2) {
    //Kontrollera om båda blommorna har jämt antal blad
    // eller att båda har udda antal blad
    if ((blomma1 % 2 === 0 && blomma2 % 2 !== 0) || (blomma1 % 2 === 0 && blomma2 % 2 !== 0)) {
        return true; // De är förälskade om båda villkoren är sanna
    } else {
        return false; // De är inte förälskade annars
    }
}

//Testa funktionen med de angivna värdena.
let blomma1 = 2;
let blomma2 = 2;
const resultat = inLove(blomma1, blomma2);

if (resultat) {
    console.log("Timmy och Sarah är förälskade!");
} else {
    console.log("Timmy och Sarah är inte förälskade.");
}

 */







  /********************************* MELLERSTA TECKEN I ORD **************************************/

/* 11 Du kommer att få ett ord. Din uppgift är att returnera det mellersta tecknet i ordet.
Om ordets längd är udda, returnera det mellersta tecknet. 
Om ordets längd är jämnt, returnera de två mellersta tecknen. */

/* function getMiddleCharacter(word) {
	// Ta reda på strängens längd
	// är ordets längd udda eller jämnt?
	// Räkna ut "mitten"
	// plocka ut 1 eller 2 tecken (beroende på udda/jämnt)
	// returnera tecknet/tecknen

	const length = word.length
	if( length % 2 === 0 ) {
		// Jämnt antal tecken
		// Exempel på en jämn sträng: 'anka'. Använd exempel för att göra sådan här kod lite mera konkret!
		let x = length / 2 - 1
		let chars = word[x] + word[x + 1]
		return chars

	} else {
		// Udda antal tecken
		// Exempel på udda sträng: 'badboll'
		let x = Math.floor(length / 2)
		let char = word[x]
		return char
	}
}

console.log('Mitten på anka är: ' + getMiddleCharacter('anka'))  // längd 4
console.log('Mitten på kaleanka är: ' + getMiddleCharacter('kaleanka'))  // längd 8
console.log('Mitten på badboll är: ' + getMiddleCharacter('badboll')) // längd 7 */










/**************** LÄNGDEN AV DET KORTASTE ORDET I EN MENING *******************************************************/

/* 12: Skriv en funktion som retunerar längden av det kortaste ordet i en mening 
**kan innehålla en loop för att lösas exempelvis en for loop */

/* function langdAvKortasteOrd(mening) {
    // Dela upp meningen i ord genom att använda mellanslag som separator.
    const ord = mening.split (" ");

    // Om meningen är tom returnerar jag 0.
    if (ord.length === 0) {
        return 0;
   }
   // Initialt sätter jag längden av det kortaste ordet till längden av det första ordet.
   let kortasteLangd = ord[0].length;

   // Använd en for-loop för att gå igenom alla ord i meningen
   for (let i = 1; i < ord.length; i++) {
    const ordlangd = ord[i].length;

    // Om det aktuella ordet är kortare än de kortaste vi har hittat hittils, uppdatera kortasteLangd.
    if (ordlangd < kortasteLangd) {
        kortasteLangd = ordlangd;
    }
}

// Returnera längden av det korstaste ordet.
return kortasteLangd;
}

const mening = "helikoptern flyger högt utanför fönstret.";
const kortasteOrdLangd = langdAvKortasteOrd(mening);
console.log(`Längden av det kortaste order är: ${kortasteOrdLangd}`); */






/******************** PRIMTAL ELLER INTE ***************************************************/

/* 13. Definiera en JavaScript-funktion som kontrollerar om ett heltal är ett primtal eller inte. 
Ett primtal är ett tal som bara är delbart med sig sjäv och 1. 
Även denna uppgift kan innehålla en for-loop och en Math.sqrt metod.

// Exempelanvändning:
const tal1 = 17; // Primtal
const tal2 = 10; // Inte ett primtal */

/* function arPrimtal(tal) {
    // Om talet är mindre än 2, är det inte ett primtal
    if (tal < 2 ) {
        return false;
    }

    // Om talet är 2 eller 3 är det ett primtal.
    if (tal === 2 || tal === 3 ) {
        return true;
    }

    // Om talet är jämnt delbart med 2 eller mindre än 0, är det inte ett primtal
    if (tal % 2 === 0 || tal < 0) {
        return false;
    }

    // Använd en for-loop för att kontrollera om talet är delbart med något tal från 2 till sqrt(tal).
    for (let i = 3; i <= Math.sqrt(tal); i += 2) {
        if (tal % i === 0) {
            return false; // Talet är delbart med i, så det är inte ett primtal.
        }
    }
    return true; // Om Loopen avslutas utan att hitta något delbart tal, är talet ett primtal
}

// Testa funktionen med olika tal.
const tal1 = 97;
const tal2 = 10;

console.log(`Är ${tal1} ett primtal? ${arPrimtal(tal1)}`);
console.log(`Är ${tal2} ett primtal? ${arPrimtal(tal2)}`); */






/****************** TRE PARAMETRAR IN OCH SEN UT**********************************/

/* 14. Skriv en funktion som tar tre parametrar: name, city och favoriteColor. 
Den ska skriva ut informationen till konsolen i en fullständig mening. 
Exempel "Välkommen Namn från Göteborg med favvofärg blått". 
Skriv kod som anropar funktionen med lämpliga värden.
 */ 

/* // Funktion som skriver ut välkomstmeddelandet
function skrivaValkommenMeddelande(name1, city, favoriteColor) {
    console.log(`Välkommen ${name1} från ${city} med favoritfärg ${favoriteColor}`);
}

// Fråga användaren efter namn, stad och favoritfärg
const name1 = prompt("Skriv ditt namn:");
const city = prompt("Skriv din stad:");
const favoriteColor = prompt("Skriv din favoritfärg:");

// Anropa funktionen med de angivna värdena
skrivaValkommenMeddelande(name1, city, favoriteColor); */






/********************* AVRUNDA TILL TVÅ DECIMALER **************************************************/

// 15. Skriv en funktion som avrundar ett tal till två decimaler, med hjälp av metoden Math.round. 


/* function avrundaTillTvaDecimaler(tal) {
    const avrundatTal = Math.round(tal * 100) / 100;

    if (tal < 0) {
        return Math.floor(tal + 0.5);
    }
    return avrundatTal;
  }
  
  console.log(avrundaTillTvaDecimaler(5.5648457)); // Förväntad utmatning: -5
  console.log(avrundaTillTvaDecimaler(-5.50000));  // Förväntad utmatning: -5
  console.log(avrundaTillTvaDecimaler(-5.95)); // Förväntad utmatning: -6 */





  /********************** SWITCH & CASE *************************************************/
/* 
  
16. Skriv en funktion som säger hur många dagar en månad har. 
(Låtsas att skottår inte finns.) Funktionen ska ha en parameter, som är en sträng för varje månad. 
Strängen ska vara de tre första tecknen i månadens namn, dvs jan, feb, mar, apr osv. 
Funktionen ska returnera ett tal. Exempelvis så är daysInMonth("mar") == 31

function daysInMonth(månad) {

    switch (månad) {
        case "jan":
        case "mar":
        case "maj":
        case "jul":
        case "aug":
        case "okt":
        case "dec":
            return 31;
        case "apr":
        case "jun":
        case "sep":
        case "nov":
            return 30;
        case "feb":
            // Vi låtsas att skottår inte finns
            return 28; 
        default:
            // Om en ogiltig månad anges
            return "Ogiltig månad"; 

    }
  }

   //Testa funktionen med olika månader
    console.log (daysInMonth("feb"));

 */















      /********************************* LOOPAR **************************************/
    
        /**************** FOR LOOPS ****************/

      // for loops

    /*   for(let i = 0; i < 5; i++) {
         console.log('in loop: ', i)
      } */

      /* const names = ['shaun', 'mario', 'luigi'];

      for(let i = 0; i < names.length; i++){
       // console.log(names[i]);
       let html = `<div>${names[i]}</div>`;
       console.log(html);
      } */

      /**************** WHILE LOOPS ****************/

      // While loops 1
      /* const names = ['shaun', 'mario', 'luigi'];
      /* let i = 0;
      
      while(i < 5){
        console.log('in loop: ', i);
        i++;
      } */ 


     /*  // While loops 2
      const names = ['shaun', 'mario', 'luigi'];
        let i = 0;
        while (i < names.legth) {
            console.log(names[i]);
            i++;
        } */

        /**************** DO WHILE LOOPS ****************/

        // Do while loops
        // Om du vill köra en gång inann while uppnås, lägg då en "do" och sen while utanför.
       /*  let i = 5;
        do {
        console.log('val of i is: ', i);
            i++;
        }
        while(i < 5);
        */

         /**************** IF STATEMENT ****************/

        // if statements

        /* const age = 20;

        if (age > 20){
            console.log('you are over 20 years olf')
        }

        const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

        if (ninjas.length > 3){
            console.log("that's a lot of ninjas")
        } */

        /* const password = 'p@ss';

        if(password.legth >= 8) {
            console.log('that password is long enough');
        } */

         /**************** ELSE IF STATEMENT ****************/

        
       /*  const password = 'p@ss';

        if(password.length >= 12){
            console.log('that password is mighty strong');
        } else if(password.length >= 8) {
            console.log('that password is strong enough');
        } else {
            console.log('password is not strong enough');
        }   
        */


        /**************** LOGICAL OPERATORS - OR || and AND && ****************/

       /*  const password = 'p@ss'

        //Båda kraven måste fyllas när jag använder &&
        if(password.length >= 12 && password.includes('@')){ 
            console.log('that password is mighty strong');
        //Här räcker det att något av kraven uppfylls när jag använder ||
        //OM jag lägger till ett kvar + && efter en || så kombineras dom som ett krav likt ovanstående
        } else if(password.length >= 8 || password.includes('@') && password.length > 5) {
            console.log('that password is strong enough');
        } else {
            console.log('password is not strong enough');
        }   
        */



         /**************** LOGICAL NOT (!) ******************************/

     /*    let user = false; //Bestämmer att user alltid är false

        if(!user){ //swoppar if-true satsen till false med hjälp av (!)

            // detta skrivs ut för att user är false och if-satsen nu är false istället
            console.log('you must be logged in top continue') 

         }

         console.log(!true);
         console.log(!false);
          */



          /**************** BREAK AND CONTINUE ******************************/

         /*  const scores = [50, 25, 0, 30, 100, 20, 10];

          for(let i = 0; i < scores.length; i++) {
            
            //Hoppar över score 0 och sen fortsätter loopen
            if(scores[i] === 0){ 
                continue;
            }

            console.log('your score: ', scores[i]);

            //När användaren når score 100 så aktiveras 'break' som avrbyter loopen
            if(scores[i] === 100) {
                console.log('congrats, you got the top score!');
                break;
            }

          } */



            /**************** SWITCH STATEMENTS ******************************/

          /*   const grade = 'D';

            switch(grade) {
                case 'A' :
                    console.log('you got an A!');
                    break;
                case 'B' :
                    console.log('you got an B!');
                    break;
                case 'C' :
                    console.log('you got an C!');
                    break;
                case 'D' :
                    console.log('you got an D!');
                    break;
                case 'E' :
                    console.log('you got an E!');
                    break;
                default: 
                console.log('not a valid grade');

            } */

        
            // ********* ANVÄND SWITCH (Pil uppåt) ISTÄLLET FÖR USING IF STATEMENTS SOM EXEMPLET NEDANFÖR
            
            /* const grade = 'D';

            if(grade === 'A'){

            } else if(grade === 'B') {
                
            } else if(grade === 'C') {

            } else if(grade === 'D') {


            } else if(grade === 'E') {

            } else {
            } */


            /**************** VARIABLES & BLOCK SCOPE ******************************/

          /*   const age = 30; //THIS VARIABLE HAVE GLOBAL SCOPE BEACUSE ITS 'OUTSIDE'
            //YOU CAN ACESS IT FROM EITHER WITHIN A {} AND OUTSIDE

            if(true) {
                const age = 40;
                const name1 = 'shaun'
                console.log('inside 1st code block: ', age, name1);

                if(true) {
                    const age = 50;
                    //Om vi inte gör en const age 50 här så kommer denna age bli senast angivna, 
                    // allstå age 40 och inte den firsta globala age 30.
                    console.log('inside 2nd code block: ', age) // Denna hittar bara sin egen age 50.

                }
            }

            console.log('outside code block: ', age); // Denna når bara vår första const age. */

           