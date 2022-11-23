let i = 20;
let j = 15;

if (i < 10) {
  console.log("i < 10");
} else if (i < 20 && j > 3) {
  console.log("i < 20", "j > 3");
} else {
  console.log("else");
}

switch (i) {
  case 0:
    console.log("i = 0");
    break;
  case 10:
    console.log("i = 10");
    break;
  default:
    console.log(`'i' = "${i}"`);
    break;
}

console.log(0 == "0");
console.log(0 == "");
console.log(0 == false);

console.log(0 === "0");
console.log(0 === "");
console.log(0 === false);
