"use strict";

(function stringMethods() {
  const world = "World";
  const string = `Hello ${world}!`;
  console.log(string.charAt(2));
  console.log(string.toLowerCase());
  console.log(string.split(" "));
})();
