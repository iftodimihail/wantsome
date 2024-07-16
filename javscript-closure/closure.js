function cakeFactory(flavor) {
  return function () {
    console.log(`Making a ${flavor} cake`);
  };
}

const bananaCakeFactory = cakeFactory("banana");
const strawberryCakeFactory = cakeFactory("strawberry");

bananaCakeFactory();
strawberryCakeFactory();
