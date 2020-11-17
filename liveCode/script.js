// Ancienne écriture des promesses
const studentCall = fetch("http://localhost:3000/student")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    return data;
  });

const courseCall = fetch("http://localhost:3000/course")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    return data;
  });

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

Promise.all([studentCall, courseCall]).then(function (results) {
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
