//"use strict";

(function variable() {
  var x = 2000; // global scope

  const car = {
    manufacturer: "Fiat",
    model: "Punto Evo",
  };

  if (true) {
    var varVariable = "Var variable"; // function scope
    let letVariable = "Let variable"; // block scope
    const constVariable = car; // block scope
    // constVariable = {};
    letVariable = "New let variable";
    constVariable.model = "Punto Classic";
    console.log(constVariable);
    console.log(letVariable);
  }

  console.log({ ...car, year: 2010 });

  console.log(varVariable);
  // console.log(letVariable);
  // console.log(constVariable);
})();
