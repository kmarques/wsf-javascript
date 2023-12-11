function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getStudents() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve([
        { name: "Dupont", cours: [1, 3, 5] },
        { name: "Lea", cours: [2, 4] },
        { name: "Charles", cours: [1] },
      ]);
    }, randomInt(1, 2) * 1000);
  });
}

function getCourses() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve([
        { id: 1, name: "JS" },
        { id: 2, name: "PHP" },
        { id: 3, name: "C#" },
        { id: 4, name: "F#" },
        { id: 5, name: "CSS" },
      ]);
    }, randomInt(2, 4) * 1000);
  });
}

function mapStudents(students, courses) {
  const mappedStudents = students.map(function (student) {
    student.cours = student.cours.map(function (coursId) {
      const cours = courses.find(function (_cours) {
        return _cours.id === coursId;
      });
      return cours;
    });
    return student;
  });
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(mappedStudents);
    }, randomInt(1, 4) * 1000);
  });
}

function timer() {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject();
    }, 7 * 1000);
  });
}

function main() {
  return Promise.all([getStudents(), getCourses()])
    .then(function (results) {
      return mapStudents(results[0], results[1]);
    })
    .then(function () {
      return;
    });
}

Promise.race([main(), timer()])
  .then(function () {
    console.log("Merge OK");
  })
  .catch(function () {
    console.log("Timeout");
  });
