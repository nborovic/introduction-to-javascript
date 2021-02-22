(function functions() {
  const subtract = (firstNumber = 10, secondNumber = 6) =>
    firstNumber - secondNumber;

  console.log(add(5, 10));
  console.log(subtract(10, 5));

  function add(firstNumber = 5, secondNumber = 8) {
    var varVariable = "Var variable";
    globalVariable = "Global variable";
    return firstNumber + secondNumber;
  }

  console.log(varVariable);
  console.log(globalVariable);

  const car = {
    brand: "Fiat",
    model: "Punto",
    start: function () {
      console.log(this);
    },
    stop: () => {
      console.log(this);
    },
  };

  car.stop();
})();
