const inquirer = require('inquirer');
const { Pool } = require('pg')

const database = new Pool(
  {
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
)

database.connect();

function GETemployee() {
  database.query(`SELECT e.id, e.first_name, e.last_name, r.title, d.dept_name as department, r.salary, e1.first_name as manager_first_name, e1.last_name as manager_last_name FROM employee as e JOIN role as r ON e.role_id = r.id JOIN employee as e1 ON e.id = e1.manager_id JOIN department as d ON d.id = r.department_id;`, function (err, { rows }) {
    if (err) {
      console.log(err);
    }
    console.table(rows);
  });
};

function ADDemployee() {

  database.query(`SELECT id, first_name, last_name FROM employee`).then(({ rows }) => {
    eRows = rows.map((item) => ({
      name: item.first_name,
      value: item.id
    }))

    database.query(`SELECT id, title FROM role`).then(({ rows }) => {
      rRows = rows.map((item) => ({
        name: item.title,
        value: item.id
      }))

      eQuestions = [
        {
          type: 'input',
          name: 'eFirstName',
          message: 'What is the employees first name?'
        },

        {
          type: 'input',
          name: 'eLastName',
          message: 'What is the employees last name?'
        },

        {
          type: 'list',
          name: 'eRole',
          message: 'What is the employees role?',
          choices: rRows
        },

        {
          type: 'list',
          name: 'eManager',
          message: 'Please input the ID of the employees manager.',
          choices: eRows
        },
      ]

      inquirer
        .prompt(eQuestions)

        .then((data) => {
          database.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id ) VALUES ('${data.eFirstName}', '${data.eLastName}', '${data.eRole}', '${data.eManager}');`)

          console.log('Employee succesffully added to the employee table!');
        });
    })
  })
};

module.exports = { GETemployee, ADDemployee };
