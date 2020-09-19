const first = "Shaun";
const last = "McKinnon";
const fullname = first + " " + last;
console.log(fullname);

const fname = `Hello ${first.toUpperCase()} ${last.toUpperCase()}`;
console.warn(fname);

console.log(`Next year I will be ${41 + 1}`);

// Conditionals
if (5 < 4) {
  console.log("Yeah obviously");
} else {
  console.log("What have we done???");
}

if (5 < 4)
  console.log("Yeah obviously");
else
  console.log("What have we done???");

let age = 45;
console.log( (age) ? age : 35 );
console.log(age || 35);
console.log( (fname && age) || 35 );