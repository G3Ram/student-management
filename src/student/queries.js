const getStudents = "SELECT * FROM students";

const getStudentById = "SELECT * FROM students WHERE ID = $1";

const checkEmailExists = "SELECT * FROM students s WHERE s.email = $1";

module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
};
