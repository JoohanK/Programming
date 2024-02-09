/************ Bibblan ****************/

let book1 = {
    title: 'Johans Book',
    author: 'JohanK',
    numPage: 137,

}

let book2 = {
    title: 'Music',
    author: 'LeifK',
    numPage: 99,
}

let book3 = {
    title: 'Sport',
    author: 'LenaK',
    numPage: 166,
}

const bookList = [book1, book2, book3];

function findBookByTitle(books, title) {
    title = title.toLowerCase();
    return books.find(book => book.title.toLowerCase() === title);


}

let searchTitle = 'sport'


let foundBook = findBookByTitle(bookList, searchTitle)

if (foundBook) {
    console.log("Boken hittades:");
    console.log(foundBook);
} else {
    console.log("Boken hittades inte.");
}


/************ Letter Frequency ****************/

function letterFrequency(str) {
    const frequency = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (frequency[char]) {
            frequency[char] += 1;
        } else {
            frequency[char] = 1;
        }
    }
    return frequency;
}

console.log(letterFrequency("kalle"));
console.log(letterFrequency("aaaa"));
console.log(letterFrequency("ni talar bra latin")); 

/************ Use register ****************/

  const users = [
    {
        "name": {
            "title": "Mr",
            "first": "Naël",
            "last": "Henry"
        },
        "email": "Nael.Henry@example.com",
        "nat": "FR"
    },
    {
        "name": {
            "title": "Miss",
            "first": "Sara",
            "last": "Faure"
        },
        "email": "Sara.Faure@example.com",
        "nat": "FR"
    },
    {
        "name": {
            "title": "Mademoiselle",
            "first": "Christel",
            "last": "Legrand"
        },
        "email": "Christel.Legrand@example.com",
        "nat": "CH"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Domenico",
            "last": "Böhner"
        },
        "email": "Domenico.Bohner@example.com",
        "nat": "DE"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Ingebjørg",
            "last": "Rishaug"
        },
        "email": "Ingebjorg.Rishaug@example.com",
        "nat": "NO"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Edwin",
            "last": "Hudson"
        },
        "email": "Edwin.Hudson@example.com",
        "nat": "US"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Esma",
            "last": "Yılmazer"
        },
        "email": "Esma.Yilmazer@example.com",
        "nat": "TR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Rasmus",
            "last": "Sakala"
        },
        "email": "Rasmus.Sakala@example.com",
        "nat": "FI"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Nuri",
            "last": "Schuldt"
        },
        "email": "Nuri.Schuldt@example.com",
        "nat": "DE"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Théo",
            "last": "Giraud"
        },
        "email": "Theo.Giraud@example.com",
        "nat": "FR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Jose",
            "last": "Sanchez"
        },
        "email": "Jose.Sanchez@example.com",
        "nat": "GB"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Lynn",
            "last": "Harink"
        },
        "email": "Lynn.Harink@example.com",
        "nat": "NL"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Layla",
            "last": "Johnson"
        },
        "email": "Layla.Johnson@example.com",
        "nat": "NZ"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Rémi",
            "last": "Arnaud"
        },
        "email": "Remi.Arnaud@example.com",
        "nat": "FR"
    },
    {
        "name": {
            "title": "Monsieur",
            "first": "Nuno",
            "last": "Brun"
        },
        "email": "Nuno.Brun@example.com",
        "nat": "CH"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Paula",
            "last": "Patterson"
        },
        "email": "Paula.Patterson@example.com",
        "nat": "AU"
    },
    {
        "name": {
            "title": "Miss",
            "first": "Encarnacion",
            "last": "Saez"
        },
        "email": "Encarnacion.Saez@example.com",
        "nat": "ES"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Jeff",
            "last": "Marshall"
        },
        "email": "Jeff.Marshall@example.com",
        "nat": "IE"
    },
    {
        "name": {
            "title": "Miss",
            "first": "Felecia",
            "last": "Washington"
        },
        "email": "Felecia.Washington@example.com",
        "nat": "AU"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Marc",
            "last": "Mendez"
        },
        "email": "Marc.Mendez@example.com",
        "nat": "ES"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Waseem",
            "last": "Snoeck"
        },
        "email": "Waseem.Snoeck@example.com",
        "nat": "NL"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Brooklyn",
            "last": "Duncan"
        },
        "email": "Brooklyn.Duncan@example.com",
        "nat": "US"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Samu",
            "last": "Kangas"
        },
        "email": "Samu.Kangas@example.com",
        "nat": "FI"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Mathias",
            "last": "Larsen"
        },
        "email": "Mathias.Larsen@example.com",
        "nat": "DK"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Mareike",
            "last": "Bönisch"
        },
        "email": "Mareike.Bonisch@example.com",
        "nat": "DE"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Liva",
            "last": "Sørensen"
        },
        "email": "Liva.Sorensen@example.com",
        "nat": "DK"
    },
    {
        "name": {
            "title": "Ms",
            "first": "یاسمین",
            "last": "حیدری"
        },
        "email": "ysmyn.Hydry@example.com",
        "nat": "IR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Adam",
            "last": "Brunet"
        },
        "email": "Adam.Brunet@example.com",
        "nat": "FR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Gerald",
            "last": "Graves"
        },
        "email": "Gerald.Graves@example.com",
        "nat": "US"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Albert",
            "last": "Nieto"
        },
        "email": "Albert.Nieto@example.com",
        "nat": "ES"
    },
    {
        "name": {
            "title": "Monsieur",
            "first": "Osman",
            "last": "Lecomte"
        },
        "email": "Osman.Lecomte@example.com",
        "nat": "CH"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Mary",
            "last": "Sims"
        },
        "email": "Mary.Sims@example.com",
        "nat": "AU"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Bowe",
            "last": "Meijerink"
        },
        "email": "Bowe.Meijerink@example.com",
        "nat": "NL"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Lindaura",
            "last": "Oliveira"
        },
        "email": "Lindaura.Oliveira@example.com",
        "nat": "BR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Muhammed",
            "last": "Nordvik"
        },
        "email": "Muhammed.Nordvik@example.com",
        "nat": "NO"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Maelya",
            "last": "Martinez"
        },
        "email": "Maelya.Martinez@example.com",
        "nat": "FR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "اميرحسين",
            "last": "نجاتی"
        },
        "email": "myrHsyn.njty@example.com",
        "nat": "IR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Gabe",
            "last": "Mccoy"
        },
        "email": "Gabe.Mccoy@example.com",
        "nat": "GB"
    },
    {
        "name": {
            "title": "Mademoiselle",
            "first": "Suzanne",
            "last": "Clement"
        },
        "email": "Suzanne.Clement@example.com",
        "nat": "CH"
    },
    {
        "name": {
            "title": "Miss",
            "first": "Samara",
            "last": "Rezende"
        },
        "email": "Samara.Rezende@example.com",
        "nat": "BR"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Kaja",
            "last": "Kjørstad"
        },
        "email": "Kaja.Kjorstad@example.com",
        "nat": "NO"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Lucie",
            "last": "Roussel"
        },
        "email": "Lucie.Roussel@example.com",
        "nat": "FR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Maxime",
            "last": "Brown"
        },
        "email": "Maxime.Brown@example.com",
        "nat": "CA"
    },
    {
        "name": {
            "title": "Ms",
            "first": "یاسمین",
            "last": "سهيلي راد"
        },
        "email": "ysmyn.shylyrd@example.com",
        "nat": "IR"
    },
    {
        "name": {
            "title": "Madame",
            "first": "Yvette",
            "last": "Da Silva"
        },
        "email": "Yvette.DaSilva@example.com",
        "nat": "CH"
    },
    {
        "name": {
            "title": "Miss",
            "first": "Kathleen",
            "last": "Lawrence"
        },
        "email": "Kathleen.Lawrence@example.com",
        "nat": "IE"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Landon",
            "last": "Fox"
        },
        "email": "Landon.Fox@example.com",
        "nat": "US"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Maëva",
            "last": "Lecomte"
        },
        "email": "Maeva.Lecomte@example.com",
        "nat": "FR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Carter",
            "last": "Evans"
        },
        "email": "Carter.Evans@example.com",
        "nat": "NZ"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Teobaldo",
            "last": "Jesus"
        },
        "email": "Teobaldo.Jesus@example.com",
        "nat": "BR"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Nanna",
            "last": "Kristensen"
        },
        "email": "Nanna.Kristensen@example.com",
        "nat": "DK"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Willow",
            "last": "Taylor"
        },
        "email": "Willow.Taylor@example.com",
        "nat": "NZ"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Nicolas",
            "last": "Sirko"
        },
        "email": "Nicolas.Sirko@example.com",
        "nat": "CA"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Freya",
            "last": "Edwards"
        },
        "email": "Freya.Edwards@example.com",
        "nat": "NZ"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Martha",
            "last": "Alexander"
        },
        "email": "Martha.Alexander@example.com",
        "nat": "GB"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Vildan",
            "last": "Candan"
        },
        "email": "Vildan.Candan@example.com",
        "nat": "TR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Ivan",
            "last": "Sims"
        },
        "email": "Ivan.Sims@example.com",
        "nat": "IE"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Elisa",
            "last": "Ehlert"
        },
        "email": "Elisa.Ehlert@example.com",
        "nat": "DE"
    },
    {
        "name": {
            "title": "Monsieur",
            "first": "Enver",
            "last": "Boyer"
        },
        "email": "Enver.Boyer@example.com",
        "nat": "CH"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Candelária",
            "last": "Santos"
        },
        "email": "Candelaria.Santos@example.com",
        "nat": "BR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Murat",
            "last": "Duygulu"
        },
        "email": "Murat.Duygulu@example.com",
        "nat": "TR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Ayub",
            "last": "Telle"
        },
        "email": "Ayub.Telle@example.com",
        "nat": "NO"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Onni",
            "last": "Heinonen"
        },
        "email": "Onni.Heinonen@example.com",
        "nat": "FI"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Thorbjørn",
            "last": "Mykland"
        },
        "email": "Thorbjorn.Mykland@example.com",
        "nat": "NO"
    },
    {
        "name": {
            "title": "Miss",
            "first": "Tracy",
            "last": "Bryant"
        },
        "email": "Tracy.Bryant@example.com",
        "nat": "US"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Oscar",
            "last": "Møller"
        },
        "email": "Oscar.Moller@example.com",
        "nat": "DK"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Sergio",
            "last": "Little"
        },
        "email": "Sergio.Little@example.com",
        "nat": "IE"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Kathleen",
            "last": "Jüngling"
        },
        "email": "Kathleen.Jungling@example.com",
        "nat": "DE"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Marta",
            "last": "Marquez"
        },
        "email": "Marta.Marquez@example.com",
        "nat": "ES"
    },
    {
        "name": {
            "title": "Monsieur",
            "first": "Mathias",
            "last": "Nguyen"
        },
        "email": "Mathias.Nguyen@example.com",
        "nat": "CH"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Pauline",
            "last": "Gundlach"
        },
        "email": "Pauline.Gundlach@example.com",
        "nat": "DE"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Nur",
            "last": "Vervuurt"
        },
        "email": "Nur.Vervuurt@example.com",
        "nat": "NL"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Clinton",
            "last": "Cooper"
        },
        "email": "Clinton.Cooper@example.com",
        "nat": "GB"
    },
    {
        "name": {
            "title": "Monsieur",
            "first": "Hermann",
            "last": "Henry"
        },
        "email": "Hermann.Henry@example.com",
        "nat": "CH"
    },
    {
        "name": {
            "title": "Mr",
            "first": "آرتين",
            "last": "سهيلي راد"
        },
        "email": "artyn.shylyrd@example.com",
        "nat": "IR"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Deniz",
            "last": "Akgül"
        },
        "email": "Deniz.Akgul@example.com",
        "nat": "TR"
    },
    {
        "name": {
            "title": "Miss",
            "first": "Afşar",
            "last": "Numanoğlu"
        },
        "email": "Afsar.Numanoglu@example.com",
        "nat": "TR"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Lumi",
            "last": "Haataja"
        },
        "email": "Lumi.Haataja@example.com",
        "nat": "FI"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Juan",
            "last": "Lozano"
        },
        "email": "Juan.Lozano@example.com",
        "nat": "ES"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Fredi",
            "last": "Helfrich"
        },
        "email": "Fredi.Helfrich@example.com",
        "nat": "DE"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Afşar",
            "last": "Aybar"
        },
        "email": "Afsar.Aybar@example.com",
        "nat": "TR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Dino",
            "last": "Schäffler"
        },
        "email": "Dino.Schaffler@example.com",
        "nat": "DE"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Meagan",
            "last": "Epskamp"
        },
        "email": "Meagan.Epskamp@example.com",
        "nat": "NL"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Laura",
            "last": "Jensen"
        },
        "email": "Laura.Jensen@example.com",
        "nat": "DK"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Pinja",
            "last": "Mattila"
        },
        "email": "Pinja.Mattila@example.com",
        "nat": "FI"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Jayden",
            "last": "Ward"
        },
        "email": "Jayden.Ward@example.com",
        "nat": "IE"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Jacob",
            "last": "Poulsen"
        },
        "email": "Jacob.Poulsen@example.com",
        "nat": "DK"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Cathy",
            "last": "Riley"
        },
        "email": "Cathy.Riley@example.com",
        "nat": "IE"
    },
    {
        "name": {
            "title": "Mrs",
            "first": "Susanna",
            "last": "Kyllingstad"
        },
        "email": "Susanna.Kyllingstad@example.com",
        "nat": "NO"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Donna",
            "last": "Fernandez"
        },
        "email": "Donna.Fernandez@example.com",
        "nat": "GB"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Aron",
            "last": "Krogstad"
        },
        "email": "Aron.Krogstad@example.com",
        "nat": "NO"
    },
    {
        "name": {
            "title": "Mademoiselle",
            "first": "Stefania",
            "last": "Meyer"
        },
        "email": "Stefania.Meyer@example.com",
        "nat": "CH"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Celestine",
            "last": "Dumas"
        },
        "email": "Celestine.Dumas@example.com",
        "nat": "FR"
    },
    {
        "name": {
            "title": "Ms",
            "first": "Charlie",
            "last": "Denys"
        },
        "email": "Charlie.Denys@example.com",
        "nat": "CA"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Veli",
            "last": "Klemm"
        },
        "email": "Veli.Klemm@example.com",
        "nat": "DE"
    },
    {
        "name": {
            "title": "Miss",
            "first": "Alianne",
            "last": "Stroeken"
        },
        "email": "Alianne.Stroeken@example.com",
        "nat": "NL"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Davut",
            "last": "Tazegül"
        },
        "email": "Davut.Tazegul@example.com",
        "nat": "TR"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Jens-Peter",
            "last": "Pingel"
        },
        "email": "Jens-Peter.Pingel@example.com",
        "nat": "DE"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Ailo",
            "last": "Sande"
        },
        "email": "Ailo.Sande@example.com",
        "nat": "NO"
    },
    {
        "name": {
            "title": "Mr",
            "first": "Ted",
            "last": "Lambert"
        },
        "email": "Ted.Lambert@example.com",
        "nat": "AU"
    }
]



let nameAndNat = users
  .map(person => person.name.first + ' ' + person.nat);

console.log(nameAndNat);


/********* filterByGender ******/


let onlyMr = users.filter(person => person.name.title === "Mr");
let mrNames = onlyMr.map(person => person.name.first + ' ' + person.name.last);


console.log("Endast Mr:", mrNames);

let onlyMiss = users.filter(person => person.name.title === "Miss");
let nameMiss = onlyMiss.map(person => person.name.first + ' ' + person.name.last);
console.log("Endast Miss:", nameMiss)

/************* listEmails *************/




let firstName = users.map(person => person.name.first);


let contryDomain = users.map(person => person.nat);

let noEmail = users.map(person => { const { email, ...userWithoutEmail } = person;
    return userWithoutEmail;
  });
  
  let newEmails = noEmail.map(person => {
    const { name, nat } = person;
    const { first } = name;
    const countryDomain = nat;// Anpassa landsdomänen efter ditt behov
    const newEmail = `${first}@evilcorp.${countryDomain}`;
    return { ...person, email: newEmail };
  });
  
  console.log(newEmails);