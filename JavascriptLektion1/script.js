
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

    /**********************************************/


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

    /*****************************************/



  /* 1

     function exempel (x, y) {
        console.log("x är:", x)
        console.log("y är:", y)
        return x * y;
    }

    const z = exempel (100, 200)
    console.log (z + " kvadratmeter");

    **********************************************
 */

   
/* 2
    var minStrang = "";

    function arTomStrang(strang) {
        return strang.length === 0;
      }

    if (arTomStrang(minStrang)) {
      console.log("Strängen är tom.");
    } else {
      console.log("Strängen är inte tom.");
    }

**********************************************

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



/**********************Öving3************************/

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

    
/**********************Övning3 (annat alternativ)************************/

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
checkIfNumberIsPosetive(500)
checkIfNumberIsPosetive(0)




/***********************************************************************/

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

  var n = 0; // Du kan ändra n till det nummer du vill beräkna summan för.
var resultat = sumOfFactorials(n);
console.log("Summan av faktoriseringsvärden från 1 till " + n + " är: " + resultat); */

    
