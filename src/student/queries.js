const getStudents = "SELECT * FROM students";

const getStudentById = "SELECT * FROM students WHERE ID = $1";

module.exports = {
  getStudents,
  getStudentById,
};
