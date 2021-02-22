(function loops() {
  const interns = ["Jere", "Mislav", "Frane", "Duje", "Bruno"];
  const car = {
    brand: "Fiat",
    model: "Punto",
    year: 2010,
  };

  for (let i = 0; i < interns.length; i++) {
    console.log(car[i]);
  }

  for (const intern of interns) {
    console.log(intern);
  }

  for (const prop in car) {
    console.log(prop);
  }

  do {
    console.log("NORIP");
  } while (false);

  while (false) {
    console.log("RIP");
  }
})();
