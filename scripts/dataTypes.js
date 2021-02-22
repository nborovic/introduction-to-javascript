"use strict";

(function dataTypes() {
  // Primitives

  let first = undefined;
  let second = true;
  let third = 500;
  let fourth = "string";
  let fifth = 500n;
  let sixth = Symbol("Sym");

  // Structural

  let seventh = {};
  let eight = function () {
    return null;
  };

  // Structural Root Privmitive

  let ninth = null;

  console.log(typeof eight);

  // Truthy and falsy values

  if (-0) console.log(true);
  else console.log(false);

  // Type coercion

  console.log("2" + "2" - "2");
  console.log(true + true + true);

  // Conditions

  if (true == 1) console.log("true == 1");
  else if (true === 1) console.log("true === 1");
  else;
})();
