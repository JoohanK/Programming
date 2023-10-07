/* ********* FOR ************/
//1. Skapa en loop som itererar 100 varv. För varje iteration ska du console.log() vilket varv du är på.

for (let i = 0; i <= 100; i = i + 1) //Kan också använda i++ 
{ 
console.log(`i`, i); 
} 

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
/* 6. loopa ut föjande array och skriv ut det på sidan */

// Skapa en tom HTML-lista
const lista = document.createElement('ul');

// Loopa igenom frukter och skapa listelement för varje frukt
frukter.forEach(frukt => {
  const listElement = document.createElement('li');
  listElement.textContent = frukt;
  lista.appendChild(listElement);
});

// Lägg till listan på sidan
document.body.appendChild(lista);


// 7. Sök i en array: Skapa en funktion som tar en array och ett 
//sökord som argument och returnerar alla element som innehåller sökordet

function sokArray(arr, sokord) {
  // Skapa en tom array för att lagra matchade element
  let matchadeElement = [];

  // Loopa igenom arrayen och kolla om varje element innehåller sökordet
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(sokord)) {
      matchadeElement.push(arr[i]);
    }
  }

  // Returnera arrayen med matchade element
  return matchadeElement;
}

// Exempelanvändning:
const minArray = ["apple", "banan", "apelsin", "jordgubbe", "kiwi"];
const sokord = "ap";

const resultat = sokArray(minArray, sokord);
console.log(resultat); // Resultat: ["apple", "apelsin"]



// 8.Hitta högsta numret i en array med en For loop

function hittaHogstaNumret(arr) {
  if (arr.length === 0) {
    // Om arrayen är tom, returnera undefined eller ett felmeddelande
    return undefined; // eller throw new Error("Arrayen är tom");
  }

  let hogsta = arr[0]; // Anta att det första elementet är det högsta

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > hogsta) {
      hogsta = arr[i]; // Uppdatera det högsta värdet om ett större värde hittas
    }
  }

  return hogsta;
}

// Exempelanvändning:
const nummerArray = [3, 12, 5, 8, 21, 14];
const hogstaNummer = hittaHogstaNumret(nummerArray);
console.log("Det högsta numret är:", hogstaNummer); // Resultat: Det högsta numret är: 21


/******** FOR OF ***********/
let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
// 6. Loopa ut ovanstående array och console.log() varje pryl.
for (let pryl of things) {
  console.log(pryl);
}

/********* FOR EACH  ********/
//.7 Loopa ut ovanstående array och console.log() varje pryl.
things.forEach(pryl => {
  console.log(pryl);
});

// 8. Loopa ut ovanstående array och console.log() varje pryl samt vilken position i arrayen den har.
things.forEach((pryl, index) => {
  console.log(index + ': ' + pryl);
});

/******* WHILE ********/
// 9.Skapa en while-loop som kör 100 varv. console.log() ut varje varv.
let varv = 1;

while (varv <= 100) {
  console.log('Varv ' + varv);
  varv++;
}


// 10. Generera en kortlek med 52 kort där varje kort innehåller en 
//färg ( suite ) och ett värde mellan 2 och 14 ( ess )

// Skapa en kortlek
const kortlek = genereraKortlek();

// Funktion för att generera en kortlek
function genereraKortlek() {
  const farger = ['hjärter', 'ruter', 'klöver', 'spader'];
  const kortlek = [];

  for (let farg of farger) {
    for (let varde = 2; varde <= 14; varde++) {
      kortlek.push(`${farg} ${varde}`);
    }
  }

  return kortlek;
}

// Funktion för att slumpa kort
function slumpaKort(kortlek, antal) {
  const slumpadeKort = [];

  while (slumpadeKort.length < antal) {
    const slumpIndex = Math.floor(Math.random() * kortlek.length);
    slumpadeKort.push(kortlek.splice(slumpIndex, 1)[0]);
  }

  return slumpadeKort;
}

// Skriv ut 10 slumpade kort
const slumpadeKort = slumpaKort(kortlek, 10);
console.log(slumpadeKort);



//11. Loopa ut samtliga vänners favoritfrukter med en console.log().
let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]

for (let friend of friends) {
  console.log(`${friend.name}'s favoritfrukter:`);
  for (let fruit of friend.likes) {
    console.log(fruit);
  }
  console.log(""); // Lägg till en tom rad för att separera varje persons favoritfrukter
}

//12.
const passwords = [123456, "password", 12345678, "qwerty", 123456789, 12345, 1234, 111111, 1234567, 
"dragon", 123123, "baseball", "abc123", "football", "monkey", "letmein", 696969, "shadow", "master", 
666666, "qwertyuiop", 123321, "mustang", 1234567890, "michael", 654321, "pussy", "superman", "1qaz2wsx", 
7777777, "fuckyou", 121212, 100000, "qazwsx", "123qwe", "killer", "trustno1", "jordan", "jennifer", 
"zxcvbnm", "asdfgh", "hunter", "buster", "soccer", "harley", "batman", "andrew", "tigger", "sunshine", 
"iloveyou", "fuckme", 2000, "charlie", "robert", "thomas", "hockey", "ranger", "daniel", "starwars", "klaster", 
112233, "george", "asshole", "computer", "michelle", "jessica", "pepper", 1111, "zxcvbn", 555555, 11111111, 
131313, "freedom", 777777, "pass", "fuck", "maggie", 159753, "aaaaaa", "ginger", "princess", "joshua", "cheese", 
"amanda", "summer", "love", "ashley", 6969, "nicole", "chelsea", "biteme", "matthew", "access", "yankees", 
987654321, "dallas", "austin", "thunder", "taylor", "matrix", "william", "corvette", "hello", "martin", 
"heather", "secret", "fucker", "merlin", "diamond", "1234qwer", "gfhjkm", "hammer", "silver", 222222, 88888888, 
"anthony", "justin", "test", "bailey", "q1w2e3r4t5", "patrick", "internet", "scooter", "orange", 11111, "golfer", 
"cookie", "richard", "samantha", "bigdog", "guitar", "jackson", "whatever", "mickey", "chicken", "sparky", "snoopy", 
"maverick", "phoenix", "camaro", "sexy", "peanut", "morgan", "welcome", "falcon", "cowboy", "ferrari", "samsung", "andrea", 
"smokey", "steelers", "joseph", "mercedes", "dakota", "arsenal", "eagles", "melissa", "boomer", "booboo", "spider", "nascar", 
"monster", "tigers", "yellow", "xxxxxx", 123123123, "gateway", "marina", "diablo", "bulldog", "qwer1234", "compaq", "purple", 
"hardcore", "banana", "junior", "hannah", 123654, "porsche", "lakers", "iceman", "money", "cowboys", 987654, "london", 
"tennis", 999999, "ncc1701", "coffee", "scooby",1000, "miller", "boston", "q1w2e3r4", "fuckoff", "brandon", "yamaha", "chester", 
"mother", "forever", "johnny", "edward", 333333, "oliver", "redsox", "player", "nikita", "knight", "fender", "barney", "midnight", 
"please", "brandy", "chicago", "badboy", "iwantu", "slayer", "rangers", "charles", "angel", "flower", "bigdaddy", "rabbit", "wizard", 
"bigdick", "jasper", "enter", "rachel", "chris", "steven", "winner", "adidas", "victoria", "natasha", "1q2w3e4r", "jasmine", 
"winter", "prince", "panties", "marine", "ghbdtn", "fishing", "cocacola", "casper", "james", 232323, "raiders", 888888, 
"marlboro", "gandalf", "asdfasdf", "crystal", 87654321, 12344321, "sexsex", "golden", "blowme", "bigtits", 8675309, 
"panther", "lauren", "angela", "bitch", "spanky", "thx1138", "angels", "madison", "winston", "shannon", "mike", "toyota", 
"blowjob", "jordan23", "canada", "sophie", "Password", "apples", "dick", "tiger", "razz", "123abc", "pokemon", 
"qazxsw", 55555, "qwaszx", "muffin", "johnson", "murphy", "cooper", "jonathan", "liverpoo", "david", "danielle", 
159357, "jackie", 1990, "123456a", 789456, "turtle", "horny", "abcd1234", "scorpion", "qazwsxedc", 101010, "butter", 
"carlos", "password1", "dennis", "slipknot", "qwerty123", "booger", "asdf", 1991, "black", "startrek", 12341234, "cameron", 
"newyork", "rainbow", "nathan", "john", 1992, "rocket", "viking", "redskins", "butthead", "asdfghjkl", 1212, 
"sierra", "peaches", "gemini", "doctor", "wilson", "sandra", "helpme", "qwertyui", "victor", "florida", "dolphin", "pookie", 
"captain", "tucker", "blue", "liverpool", "theman", "bandit", "dolphins", "maddog", "packers", "jaguar", "lovers", 
"nicholas", "united", "tiffany", "maxwell", "zzzzzz", "nirvana", "jeremy", "suckit", "stupid", "porn", "monica", 
"elephant", "giants", "jackass", "hotdog", "rosebud", "success", "debbie", "mountain", 444444, "xxxxxxxx", "warrior", "1q2w3e4r5t", 
"q1w2e3", "123456q", "albert", "metallic", "lucky", "azerty", 7777, "shithead", "alex", "bond007", "alexis", 1111111, "samson", 
5150, "willie", "scorpio", "bonnie", "gators", "benjamin", "voodoo", "driver", "dexter", 2112, "jason", "calvin", "freddy", 
212121, "creative", "12345a", "sydney", "rush2112", 1989, "asdfghjk", "red123", "bubba", 4815162342, "passw0rd", "trouble", 
"gunner", "happy", "fucking", "gordon", "legend", "jessie", "stella", "qwert", "eminem", "arthur", "apple", "nissan", "bullshit", 
"bear", "america", "1qazxsw2", "nothing", "parker", 4444, "rebecca", "qweqwe", "garfield", 11012011, "beavis", 69696969, "jack", 
"asdasd", "december", 2222, 102030, 252525, 11223344, "magic", "apollo", "skippy", 315475, "girls", "kitten", "golf", 
"copper", "braves", "shelby", "godzilla", "beaver", "fred", "tomcat", "august", "buddy", "airborne", 1993, 1988, "lifehack", 
"qqqqqq", "brooklyn", "animal", "platinum", "phantom", "online", "xavier", "darkness", "blink182", "power", "fish", "green", 
789456123, "voyager", "police", "travis", "12qwaszx", "heaven", "snowball", "lover", "abcdef", 10000, "pakistan", 107007, "walter", 
"playboy", "blazer", "cricket", "sniper", "hooters", "donkey", "willow", "loveme", "saturn", "therock", "redwings", "bigboy", 
"pumpkin", "trinity", "williams", "tits", "nintendo", "digital", "destiny", "topgun", "runner", "marvin", "guinness", "chance", 
"bubbles", "testing", "fire", "november", "minecraft", "asdf1234", "lasvegas", "sergey", "broncos", "cartman", "private", 
"celtic", "birdie", "little", "cassie", "babygirl", "donald", "beatles", 1313, "dickhead", "family", 12121212, "school", 
"louise", "gabriel", "eclipse", "fluffy", 147258369, "lol123", "explorer", "beer", "nelson", "flyers", "spencer", 
"scott", "lovely", "gibson", "doggie", "cherry", "andrey", "snickers", "buffalo", "pantera", "metallica", "member", 
"carter", "qwertyu", "peter", "alexande", "steve", "bronco", "paradise", "goober", 5555, "samuel", "montana", 
"mexico", "dreams", "michigan", "cock", "carolina", "yankee", "friends", "magnum", "surfer", "poopoo", "maximus",
 "genius", "cool", "vampire", "lacrosse", "asd123", "aaaa", "christin", "kimberly", "speedy", "sharon", "carmen", 
 111222, "kristina", "sammy", "racing", "ou812", "sabrina", "horses", 1987654321, "qwerty1", "pimpin", "baby", "stalker", 
 "enigma", 147147, "star", "poohbear", "boobies", 147258, "simple", "bollocks", "12345q", "marcus", "brian", 1987, 
 "qweasdzxc", "drowssap", "hahaha", "caroline", "barbara", "dave", "viper", "drummer", "action", "einstein", "bitches", 
 "genesis", "hello1", "scotty", "friend", "forest", 110203, "hotrod", "google", "vanessa", "spitfire", "badger", 
 "maryjane", "friday", "alaska", "1232323q", "tester", "jester", "jake", "champion", "billy", 147852, "rock", "hawaii", 
 "badass", "chevy", 420420, "walker", "stephen", "eagle1", "bill", 1986, "october", "gregory", "svetlana", "pamela", 1984, 
 "music", "shorty", "westside", "stanley", "diesel", "courtney", 242424, "kevin", "porno", "hitman", "boobs", "mark", 
 "12345qwert", "reddog", "frank", "qwe123", "popcorn", "patricia", "aaaaaaaa", 1969, "teresa", "mozart", "buddha", "anderson", 
 "paul", "melanie", "abcdefg", "security", "lucky1", "lizard", "denise", 3333, "a12345", 123789, "ruslan", "stargate", "simpsons", 
 "scarface", "eagle", "123456789a", "thumper", "olivia", "naruto", 1234554321, "general", "cherokee", "a123456", "vincent", 
 "Usuckballz1", "spooky", "qweasd", "cumshot", "free", "frankie", "douglas", "death", 1980, "loveyou", "kitty", "kelly", 
 "veronica", "suzuki", "semperfi", "penguin", "mercury", "liberty", "spirit", "scotland", "natalie", "marley", "vikings", 
 "system", "sucker", "king", "allison", "marshall", 1979, "qwerty12", 98765, "hummer", "adrian", 1985, "vfhbyf",
  "sandman", "rocky", "leslie", "antonio", 98765432, 4321, "softball", "passion", "mnbvcxz", "bastard", "passport", 
  "horney", "rascal", "howard", "franklin", "bigred", "assman", "alexander", "homer", "redrum", "jupiter", "claudia", 
  55555555, 141414, "zaq12wsx", "shit", "patches", "nigger", "cunt", "raider", "infinity", "andre", 54321, "galore", 
  "college", "russia", "kawasaki", "bishop", 77777777, "vladimir", "money1", "freeuser", "wildcats", "francis", 
  "disney", "budlight", "brittany", 1994, 10000000, "sweet", "oksana", "honda", "domino", "bulldogs", "brutus", "swordfis", 
  "norman", "monday", "jimmy", "ironman", "ford", "fantasy", 9999, 7654321, "PASSWORD", "hentai", "duncan", 
  "cougar", 1977, "jeffrey", "house", "dancer", "brooke", "timothy", "super", "marines", "justice", "digger", "connor", 
  "patriots", "karina", 202020, "molly", "everton", "tinker", "alicia", "rasdzv3", "poop", "pearljam", "stinky", 
  "naughty", "colorado", "123123a", "water", "test123", "ncc1701d", "motorola", "ireland", "asdfg", "slut", "matt", "houston", 
  "boogie", "zombie", "accord", "vision", "bradley", "reggie", "kermit", "froggy", "ducati", "avalon", 6666, 9379992, "sarah", 
  "saints", "logitech", "chopper", 852456, "simpson", "madonna", "juventus", "claire", 159951, "zachary", "yfnfif", 
  "wolverin", "warcraft", "hello123", "extreme", "penis", "peekaboo", "fireman", "eugene", "brenda", 123654789, 
  "russell", "panthers", "georgia", "smith", "skyline", "jesus", "elizabet", "spiderma", "smooth", "pirate", "empire", 
  "bullet", 8888, "virginia", "valentin", "psycho", "predator", "arizona", 134679, "mitchell", "alyssa", 
  "vegeta", "titanic", "christ", "goblue", "fylhtq", "wolf", "mmmmmm", "kirill", "indian", "hiphop", "baxter", "awesome", 
  "people", "danger", "roland", "mookie", 741852963, 1111111111, "dreamer", "bambam", "arnold", 1981, "skipper", "serega", 
  "rolltide", "elvis", "changeme", "simon", "1q2w3e", "lovelove", "fktrcfylh", "denver", "tommy", "mine", "loverboy", "hobbes", 
  "happy1", "alison", "nemesis", "chevelle", "cardinal", "burton", "wanker", "picard", 151515, "tweety", "michael1", 
  147852369, 12312, "xxxx", "windows", "turkey", 456789, 1974, "vfrcbv", "sublime", 1975, "galina", "bobby", "newport", 
  "manutd", "daddy", "american", "alexandr", 1966, "victory", "rooster", "qqq111", "madmax", "electric", "bigcock", 
  "a1b2c3", "wolfpack", "spring", "phpbb", "lalala", "suckme", "spiderman", "eric", "darkside", "classic", "raptor", 
  "123456789q", "hendrix", 1982, "wombat", "avatar", "alpha", "zxc123", "crazy", "hard", "england", "brazil", 
  1978, 11011980, "wildcat", "polina", "freepass"];
