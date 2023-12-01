const voiture = {
  marque: "Tesla",
  modele: "Model S",
  annee: 2019,
  couleur: "rouge",
};

const voiture2 = {
  marque: "Opel",
  modele: "Corsa",
  annee: 2005,
  couleur: "bleu",
};

const voiture3 = {
  marque: "Peugeot",
  modele: "208",
  annee: 2018,
  couleur: "gris",
};

const voiture4 = {
  marque: "Opel",
  modele: "Corsa",
  annee: 2005,
  couleur: "bleu",
};
const garage = [voiture, voiture2, voiture3, voiture4];
const garageEmpty = [];

// For acc
for (let i = 0; i < garage.length; i++) {
  console.log(i, garage[i]);
}

// For of
for (let value of garage) {
  // value = garage[i];
  console.log(value);
}

// For in
for (let index in garage) {
  console.log(index, garage[index]);
}

for (let property in voiture) {
  console.log(property, voiture[property]);
}

// Do/While
let i = 0;
do {
  console.log(garage[i]);
  i++;
} while (i < garage.length);

i = 0;
do {
  console.log(garageEmpty[i]);
  i++;
} while (i < garageEmpty.length);

// Do/While
i = 0;
while (i < garage.length) {
  console.log(garage[i]);
  i++;
}

i = 0;
while (i < garageEmpty.length) {
  console.log(garageEmpty[i]);
  i++;
}

i = 0;
while (i < garage.length) {
  if (garage[i].marque === "Opel") break;
  console.log(garage[i]);
  i++;
}
console.log("L'opel est rangée dans le box " + i);

for (let i = 0; i < garage.length; i++) {
  if (garage[i].marque !== "Opel") continue;
  console.log("Une opel est rangée dans le box " + i);
}
