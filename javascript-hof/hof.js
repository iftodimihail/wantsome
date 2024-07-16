// 1. Scrieti o functie ce verifica daca toate elementele unui array dat ca și parametru sunt truthy
const areAllTruthy = (array) => {
  return array.every((currentValue) => !!currentValue);
  //   return array.filter((currentValue) => !!currentValue).length === array.length;
};

console.log(areAllTruthy([1, 4, "", "ceva", false, undefined, null])); // -> false
console.log(areAllTruthy([4, "ceva", {}])); // -> true

// 2. Transformati un array de nume și prenume, într-un array de obiecte ce țin numele și prenumele separate
const transformArray = (array) => {
  return array.map((currentValue) => {
    // currentValue -> "Iftodi Mihail"
    const splitedName = currentValue.split(" "); // -> ["Iftodi", "Mihail"];
    return { nume: splitedName[0], prenume: splitedName[1] };
  });
};
console.log(transformArray(["Iftodi Mihail", "Gioada Anamaria", "Bejan Ema"]));

// ["Iftodi Mihail", "Gioada Anamaria", "Bejan Ema"]

// [
//   { nume: "Iftodi", prenume: "Mihail" },
//   { nume: "Gioada", prenume: "Anamaria" },
//   { nume: "Bejan", prenume: "Ema" },
// ];

// 3. Creați o funcție ce returnează nr de apariții dintr-un array al unui element dat ca parametru
const numberOfOccurrences = (array, element) => {
  let occurrences = 0;

  array.forEach((currentValue) => {
    if (currentValue === element) {
      occurrences = occurrences + 1;
    }
  });

  return `Numarul ${element} apare de ${occurrences} ori`;
};

console.log(numberOfOccurrences([1, 3, 5, 3, 2, 1, 5, 1], 1)); // -> "Numarul 1 apare de 3 ori."

// 4. O funcție pentru calcularea sumei numerelor dintr-un array
const sumOfArrayNumbers = (array) => {
  let sum = 0;

  array.forEach((currentValue) => {
    sum = sum + currentValue;
  });

  return sum;
};

const sumOfArrayWithReduce = (array) => {
  return array.reduce((accumulator, currentValue) => {
    // console.log(accumulator);
    return accumulator + currentValue;
  }, 0);
};

console.log(sumOfArrayNumbers([1, 2, 3, 4]));
console.log(sumOfArrayWithReduce([1, 2, 3, 4]));

// 5. Scrieți o funcție ce inversează literele tuturor string-urilor dintr-un array
// ["ABC", "dEF"] -> ["CBA", "FEd"];
const inverseStrings = (array) => {
  return array.map((currentValue) => {
    // currentValue = "ABC"
    const arrayOfChars = currentValue.split(""); // -> ["A", "B", "C"]
    const reverseArrayOfChars = arrayOfChars.reverse(); // -> ["C", "B", "A"]
    const reversedString = reverseArrayOfChars.join(""); // -> "CBA"

    return reversedString;

    // one line
    // return currentValue.split("").reverse().join("");
  });
};

console.log(inverseStrings(["ABC", "Iftodi Mihail", "FeD"]));

// 6. Scrieti o functie care filtreaza toate cuvintele mai mari de n litere (n este parametru al functiei);
const filterStrings = (array, numOfChars) => {
  return array.filter((currentValue) => currentValue.length > numOfChars);
};

console.log(
  filterStrings(
    ["aba cadabra", "Iftodi Mihail", "wantsome", "price", "no", "yes"],
    100
  )
);

console.log(
  filterStrings(
    ["aba cadabra", "Iftodi Mihail", "wantsome", "price", "no", "yes"],
    3
  )
);

// filterStrings(["aba cadabra", "Iftodi Mihail", "wantsome", "price", "no", "yes"], 3) -> ["aba cadabra", "Iftodi Mihail", "wantsome", "price"]

// 7. Scrieti o functie care filtreaza daca elementele urmatorului array sunt membrii sau nu
// [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

const areMembers = (array) => {
  return array.filter((currentValue) => currentValue.member);
};

console.log(
  areMembers([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true },
  ])
);

// 8. Avand următorul array de adrese, faceți următoarele:
//     1. Creați o funcție pentru a sorta după numele străzii
//     2. Creati o funcție pentru a sorta după distanță fata de centru
//     3. Create o funcție care primește ca parametru un număr pentru distanță fata de centru. Afișați doar adresele care se găsesc în raza acelei distante

// [
//   { street: "Rose Avn.", distance_from_center: 120 },
//   { street: "Saint Patrick St.", distance_from_center: 12 },
//   { street: "Rock St.", distance_from_center: 10 },
//   { street: "Hollywood Blvd.", distance_from_center: 230 },
//   { street: "Sesame St.", distance_from_center: 23 },
// ];
