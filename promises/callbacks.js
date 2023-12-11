function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getStudents(callback) {
  setTimeout(function () {
    callback([
      { name: "Dupont", cours: [1, 3, 5] },
      { name: "Lea", cours: [2, 4] },
      { name: "Charles", cours: [1] },
    ]);
  }, randomInt(1, 2) * 1000);
}

function getCourses(callback) {
  setTimeout(function () {
    callback([
      { id: 1, name: "JS" },
      { id: 2, name: "PHP" },
      { id: 3, name: "C#" },
      { id: 4, name: "F#" },
      { id: 5, name: "CSS" },
    ]);
  }, randomInt(2, 4) * 1000);
}

function mapStudents(students, courses, callback) {
  const mappedStudents = students.map(function (student) {
    student.cours = student.cours.map(function (coursId) {
      const cours = courses.find(function (_cours) {
        return _cours.id === coursId;
      });
      return cours;
    });
    return student;
  });
  setTimeout(function () {
    callback(mappedStudents);
  }, randomInt(1, 4) * 1000);
}

function timer(callback) {
  setTimeout(function () {
    callback();
  }, 7 * 1000);
}

function main(callback) {
  const results = [];
  getStudents(function (students) {
    results[0] = students;
    if (results.length === 2) {
      mapStudents(results[0], results[1], callback);
    }
  });
  getCourses(function (courses) {
    results[1] = courses;
    if (results.length === 2) {
      mapStudents(results[0], results[1], callback);
    }
  });
}

function main2(callback) {
  all([getStudents, getCourses], callback);
}

function all(functions, callback) {
  const results = [];
  functions.forEach(function (func, index) {
    func(function (result) {
      results[index] = result;
      if (results.length === functions.length) {
        setTimeout(function () {
          callback(results);
        }, 0);
      }
    });
  });
}

let done = false;
main(function () {
  if (done === false) {
    done = true;
    console.log("Merge OK");
  }
});
timer(function () {
  if (done === false) {
    done = true;
    console.log("Timeout");
  }
});
