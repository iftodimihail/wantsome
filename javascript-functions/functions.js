// 1. Creati o functie care printeaza “Hello world!” la consola. Modificati-o astfel incat atat mesajul sa fie configurabil.
function printMessage(message) {
  console.log(message);
}

printMessage();
printMessage("Hello world!");
printMessage("Another hello world!");

// 2. Creati o functie care calculeaza si returneaza media aritmetica a doua numere.
function mediaAritmetica(a, b) {
  const media = (a + b) / 2;
  return media;
}

console.log("Media aritmetica a intre 10 si 6: ", mediaAritmetica(10, 6));

// 3. Creati o functie care primeste ca argumente doua numere naturale si il returneaza pe cel mai mic dintre ele.
function smallestNumber(number1, number2) {
  if (number1 < number2) {
    return number1;
  } else {
    return number2;
  }
}

console.log("Cel mai mic numbar intre 23 si 12 este: ", smallestNumber(21, 12));

// 4. Creati o functie care primeste baza si exponentul ca argumente si returneaza rezultatul ridicarii bazei la puterea specificata.
function powerOf(base, exponent) {
  // alta solutie ar fi: return Math.pow(base, exponent);

  // daca exponentul este 0, rezultatul este 1
  if (exponent === 0) {
    return 1;
  }

  // daca exponentul este 1, resultatul este baza
  if (exponent === 1) {
    return base;
  }

  // retinem valoare initiala a bazei
  const initialBase = base;

  for (let i = 2; i <= exponent; i++) {
    base = base * initialBase;
  }

  return base;
}

console.log(powerOf(2, 0));
console.log(powerOf(2, 1));
console.log(powerOf(2, 2));
console.log(powerOf(2, 3));

// 5. Creati o functie cu doi parametri. Primul parametru este un sir de caractere, iar cel de-al doilea este un caracter.
//    Numarati de cate ori apare al doilea parametru in string-ul din primul parametru.
function numberOfAppearances(characters, char) {
  // Ana a fost in livada si a cules mere si pere.
  return characters.split(char).length - 1;
}

const propozitie = "Ana a fost in livada si a cules mere si pere.";
const caracter = "a";

console.log(
  "Caracterul ",
  caracter,
  " apare in ",
  propozitie,
  " de ",
  numberOfAppearances(propozitie, caracter),
  " ori."
);

// 6. Creati o functie care converteste temperatura din grade Celsius in grade Fahrenheit.
//    Modificati-o astfel incat sa suporte si conversia din Fahrenheit in Celsius.

// convertTo poate fi C = Celsiun sau F = Fahrenheit;
function temperatureConverter(temperature, convertTo) {
  // convertim in grade Fahrenheit
  if (convertTo === "F") {
    return temperature * 1.8 + 32;
  }

  if (convertTo === "C") {
    return (temperature - 32) / 1.8;
  }
}

const temperature = 20;
console.log(temperature, "°C = ", temperatureConverter(temperature, "F"), "°F");
console.log(temperature, "°F = ", temperatureConverter(temperature, "C"), "°C");

// 7. Creati o functie care primeste ca argument un numar. Verificati daca acest numar este palindrom.
function palindrom(number) {
  const stringNumber = number.toString();
  const numberDigits = stringNumber.split("");
  const reversedNumberDigits = numberDigits.reverse();
  const reversedStringNumber = reversedNumberDigits.join("");

  if (number == reversedStringNumber) {
    return `Numarul ${number} este palindrom`;
  } else {
    return `Numarul ${number} nu este plindrom`;
  }
}

console.log(palindrom(1234));
console.log(palindrom(12321));

// 8. Creati o functie care primeste ca argument un sir de caractere.
//    Returnati un nou sir in care fiecare cuvant este scris cu prima litera majuscula.
function capitalize(characters) {
  const words = characters.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    const uppercasedFirstLetter = word[0].toUpperCase();
    const theRestOfTheWord = word.substring(1);
    word = uppercasedFirstLetter + theRestOfTheWord;
    words[i] = word;
  }

  return words.join(" ");
}

const characters = "Ana are in livada mere si pere";
console.log(capitalize(characters));

// 9. Creati o functie care numara vocalele dintr-un sir de caractere.
function countVocals(characters) {
  let numberOfVocals = 0;
  const vocals = ["a", "e", "i", "o", "u"];

  const lowercasedString = characters.toLowerCase();
  const lowercasedStringArray = lowercasedString.split("");

  function isVocal(char) {
    if (vocals.includes(char)) {
      return (numberOfVocals += 1);
    }
  }

  lowercasedStringArray.forEach(isVocal);

  return numberOfVocals;
}

console.log(
  "Numbar de vocale in ",
  characters,
  " este ",
  countVocals(characters)
);

// 10. Creati o functie care verifica daca un numar este prim.
function isPrime(number) {
  if (number === 1) {
    return;
  }

  const squareRoot = Math.sqrt(number);

  for (let i = 2; i <= squareRoot; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("Numarul 5 este prim? ", isPrime(5));
console.log("Numarul 10 este prim? ", isPrime(10));
console.log("Numarul 13 este prim? ", isPrime(13));
console.log("Numarul 21 este prim? ", isPrime(21));

// 11. Creati o functie care primeste ca argument un sir de caractere si
//     verifica daca acest sir are cel putin 8 caractere si contine cel putin un caracter special.
function stringVerification(characters) {
  const format = /[^a-zA-Z0-9]+$/;
  if (characters.length > 8 && characters.match(format)) {
    return "Sirul are cel putin 8 caractere si contine cel putin un caracter special";
  } else {
    return "Sirul NU are cel putin 8 caractere si contine cel putin un caracter special";
  }
}

console.log(stringVerification(characters));
console.log(stringVerification("Ana are mere."));

// 12. Creati o functie care primeste ca argument un sir de caractere si verifica daca acest sir reprezinta o adresa de email valida.
function isEmail(email) {
  const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email.match(emailFormat)) {
    return true;
  } else {
    return false;
  }
  // ternary expression
  // return email.match(emailFormat) ? true : false;
}

console.log(isEmail("test@gmail.com"));
console.log(isEmail("Some random text"));
