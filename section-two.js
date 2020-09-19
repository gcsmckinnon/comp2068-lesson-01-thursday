console.log("Section Two Ready");
console.info("Info");
console.debug("Debugging");
console.error("Error");
console.warn("Warning");

try {
  const age = 41;
  console.log(age, "This is the age");
  // debugger;
  age = 35;
} catch (error) {
  console.error("Everything is ok. Nothing to see here.");
  console.dir(error.stack);
  console.log(error);
} finally {
  console.log("I'm still here");
}