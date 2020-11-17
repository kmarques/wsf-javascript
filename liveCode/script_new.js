// Nouvelle écriture des promesses
async function studentCall() {
  const res = await fetch("http://localhost:3000/student");
  const data = await res.json();
  return data;
}

// <==>
// Ancienne écriture
//const studentCall = new Promise(function (resolve, reject) {
//  fetch("http://localhost:3000/student")
//    .then(function (res) {
//      return res.json();
//    })
//    .then(function (data) {
//      resolve(data);
//    });
//});

async function courseCall() {
  const res = await fetch("http://localhost:3000/course");
  const data = await res.json();
  return data;
}

function mapping(students, courses) {
  students = students.map(function (student) {
    student.courses = student.courses.map(function (courseId) {
      return courses.find(function (course) {
        return course.id === courseId;
      });
    });
    return student;
  });
  return students;
}

Promise.all([studentCall(), courseCall()]).then(function (results) {
  const students = mapping(results[0], results[1]);
  document.write("<ul>");
  for (let student of students) {
    document.write("<li>");
    document.write(student.name.ucfirst());
    document.write("<ul>");
    for (let course of student.courses) {
      document.write("<li>");
      document.write(course.name);
      document.write("</li>");
    }
    document.write("</ul>");
    document.write("</li>");
  }
  document.write("</ul>");
});
