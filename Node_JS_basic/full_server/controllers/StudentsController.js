import readDatabase from '../utils';

const database = process.argv[2];

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(database)
      .then((fields) => {
        res.status(200);
        res.write('This is the list of our students\n');

        Object.keys(fields)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .forEach((field) => {
            res.write(
              `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`
            );
          });

        res.end();
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(database)
      .then((fields) => {
        res.status(200).send(`List: ${fields[major].join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
