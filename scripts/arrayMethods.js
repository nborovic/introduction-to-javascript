"use strict";

(function arrayMethods() {
  const interns = ["Jere", "Mislav", "Frane", "Duje", "Bruno"];

  interns.forEach((intern) => console.log(intern));
  console.log(interns.filter((intern) => intern.length > 4));
  console.log(interns.find((intern) => intern === "Jere"));
  console.log(interns.includes("Bruno"));
  console.log(interns.slice(0, 3));
  console.log(interns.splice(2, 1));
  console.log(interns.map((intern) => intern));

  interns.pop();
  interns.push("Michelle");
  interns.shift();
  interns.unshift("Lovre");

  console.log(interns);
})();
