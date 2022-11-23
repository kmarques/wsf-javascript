const duckArray = ["Donald", "Daisy", "Huey", "Dewey", "Louie"];
const duck = {
  name: "Donald",
  color: "white",
  age: 87,
  isMallard: true,
  isMale: true,
  isDuck: true,
};

const hugeArray = [
  {
    name: "Donald",
    color: "white",
    age: 87,
    isMallard: true,
    isMale: true,
    isDuck: true,
  },
  {
    name: "Daisy",
    color: "white",
    age: 84,
    isMallard: true,
    isMale: false,
    isDuck: true,
  },
  {
    name: "Huey",
    color: "white",
    age: 1,
    isMallard: true,
    isMale: true,
    isDuck: true,
  },
];

// for(init;cond;acc)
console.log("for");
for (let i = 0; i < duckArray.length; i++) {
  console.log(duckArray[i]);
}

// for...of
console.log("for...of");
for (let duckName of duckArray) {
  console.log(duckName);
}

// for...in
console.log("for...in", "array");
for (let index in duckArray) {
  console.log(index, duckArray[index]);
}
console.log("for...in", "object");
for (let property in duck) {
  console.log(property, duck[property]);
}

start_search: {
  for (let duck of hugeArray) {
    for (let prop in duck) {
      if (prop === "isMale" && duck[prop] === false) {
        console.log(duck.name, "is a female");
        break start_search;
      }
    }
  }
}

// while
console.log("while");
let i = 0;
while (i < duckArray.length) {
  console.log(duckArray[i++]);
}

// i++ Vs ++i
console.log("i++ Vs ++i");
let k = 0;
let l = 0;
console.log(k++, ++l);
console.log(k, l);

// do...while
console.log("do...while");
let j = 0;
do {
  console.log(duckArray[j]);
} while (++j < duckArray.length);
