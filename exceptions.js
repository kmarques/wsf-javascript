function ucfirst(str) {
  if (typeof str !== "string" || str === "")
    throw new TypeError("str must be a non-empty string");
  return str[0].toUpperCase() + str.slice(1);
}

try {
  console.log(ucfirst("test"));
} catch (e) {
  console.error(e.name, e.message);
}
try {
  console.log(ucfirst(null));
} catch (e) {
  console.error(e.name, e.message);
}
try {
  console.log(ucfirst("test2"));
} catch (e) {
  console.error(e.name, e.message);
}

function InvalidCarError(voiture) {
  // … Votre code vient ici

  const instance = new Error(
    voiture.marque + " is not a valid car, expected Opel"
  );
  instance.name = "InvalidCarError";
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, InvalidCarError);
  }
  return instance;
}

const garage = {
  open: true,
  voitures: [],
};

function addVoiture(garage, voiture) {
  if (!garage.open) throw new ReferenceError("garage is closed");
  if (voiture.marque !== "Opel") throw new InvalidCarError(voiture);
  garage.voitures.push(voiture);
}

function removeVoiture(garage, voiture) {
  if (!garage.open) throw new ReferenceError("garage is closed");
  const index = garage.voitures.indexOf(voiture);
  if (index === -1) throw new RangeError("voiture not found");
  garage.voitures.splice(index, 1);
}

const camion = [
  { marque: "Opel", modele: "Vivaro" },
  { marque: "Opel", modele: "Movano" },
  { marque: "Opel", modele: "Combo" },
  { marque: "Peugeot", modele: "Expert" },
  { marque: "Peugeot", modele: "Boxer" },
  { marque: "Peugeot", modele: "Partner" },
  { marque: "Citroen", modele: "Jumper" },
  { marque: "Citroen", modele: "Jumpy" },
  { marque: "Citroen", modele: "Berlingo" },
  { marque: "Opel", modele: "Movano" },
  { marque: "Opel", modele: "Combo" },
];

try {
  for (let voiture of camion) {
    try {
      addVoiture(garage, voiture);
    } catch (e) {
      if (e instanceof InvalidCarError) {
        console.error(e.name, e.message);
      } else {
        throw e;
      }
    }
  }

  // Tests sur les voitures
  try {
    removeVoiture(garage, camion[0]);
  } catch (e) {
    if (e instanceof RangeError) {
      console.error(e.name, e.message);
    } else {
      throw e;
    }
  }
} catch (e) {
  if (e instanceof ReferenceError) {
    console.error(e.name, e.message);
  } else {
    throw e;
  }
}

console.log("Voitures dans le garage :", garage.voitures.length);
