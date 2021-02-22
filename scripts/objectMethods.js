(function objectMethods() {
  const car = {
    brand: "Fiat",
    model: "Punto",
    year: 2010,
  };

  const statusEnum = Object.freeze({
    DRIVING: "DRIVING",
    STOPPED: "STOPPED",
  });

  console.log(Object.entries(statusEnum).map((entry) => entry));

  const car2 = Object.assign({}, car);

  car.year = 2001;
  console.log(car);
  console.log(car2);
})();
