/*
Simulation d’appels serveurs
Créer une Promise getStudents qui récupère une liste d’étudiants entre 1 et 2 secondes
EX: [ { name: "Dupont", cours: [ 1, 3, 5 ] }, { name: "Lea", cours: [ 2, 4 ] }, { name: "Charles", cours: [ 1 ] } ]
Créer une Promise getCourses qui récupère une liste de cours entre 2 et 4 secondes
EX: [ { id: 1, name: "JS" }, { id: 2, name: "PHP" }, { id: 3, name: "C#" }, { id: 4, name: "F#" }, { id: 5, name: "CSS" } ]
Créer une Promise qui mappe à l’ensemble des étudiants les cours associés entre 1 et 4 secondes
EX: [ { name: "Lea", cours: [ { id: 2, name: "PHP" }, { id: 4, name: "F#" } ] }, … ]
Créer une Promise qui contrôle le temps d’accès global
Celle-ci doit rejeter si le temps max dépasse 7 secondes
Afficher la fonction et le temps estimé pour chaque Promise
EX: "getStudents:2"
Afficher "Merge OK" si tout s’est bien passé sinon "Timeout"
*/

const getStudents = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([
      { name: "Dupont", cours: [1, 3, 5] },
      { name: "Lea", cours: [2, 4] },
      { name: "Charles", cours: [1] },
    ]);
  }, 2000);
});

const getCourses = new Promise(function (res, rej) {
  setTimeout(function () {
    res([
      { id: 1, name: "JS" },
      { id: 2, name: "PHP" },
      { id: 3, name: "C#" },
      { id: 4, name: "F#" },
      { id: 5, name: "CSS" },
    ]);
  }, 3000);
});

function mapStudents(students, courses) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      const studentsMapped = students.map(function (student) {
        student.cours = student.cours.map(function (coursId) {
          return courses.find(function (cours) {
            return cours.id === coursId;
          });
        });
        return student;
      });
      res(studentsMapped);
    }, 7000);
  });
}

const timer = new Promise(function (res, rej) {
  setTimeout(function () {
    rej();
  }, 7000);
});

Promise.race([
  Promise.all([getStudents, getCourses]).then(function (results) {
    const students = results[0];
    const courses = results[1];
    return mapStudents(students, courses);
  }),
  timer,
])
  .then(function (mapping) {
    console.log(mapping, "Merge OK");
  })
  .catch(function (e) {
    console.log("Timeout");
  });
