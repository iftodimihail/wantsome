function createModule() {
  let age = 28;
  let name = "Wantsome";

  function incrementAge() {
    age++;
  }

  function getYearOfBirth() {
    return new Date().getFullYear() - age;
  }

  function updateName(newName) {
    name = newName;
  }

  function print() {
    console.log(
      `My name is ${name}, I am ${age} old and I was born ${getYearOfBirth()}`
    );
  }

  return {
    incrementAge,
    getYearOfBirth,
    updateName,
    print,
  };
}

const module1 = createModule();
const module2 = createModule();

module2.incrementAge();
module2.updateName("Mihai");

module1.print();
module2.print();
