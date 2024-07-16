function parentFunction() {
  const x = "Parent variable value";

  // console.log(y);

  function childFunction() {
    const y = "Child variable value";

    console.log(x);
    console.log(y);

    function childChildFunction() {
      console.log(y);
    }

    childChildFunction();
  }

  childFunction();
}

parentFunction();
