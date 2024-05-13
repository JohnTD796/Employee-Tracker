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
    database.query(`SELECT * FROM employee;`, function (err, { rows }) {
        if (err) {
            console.log(err);
        }
        console.table(rows);
    });
};

function ADDemployee() {

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
        type: 'input',
        name: 'eRole',
        message: 'What is the employees role ID?'
      },

      {
        type: 'input',
        name: 'eManager',
        message: 'Please input the ID of the employees manager.'
      },
    ]
  
    inquirer
      .prompt(eQuestions)
  
      .then((data) => {
        database.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id ) VALUES ('${data.eFirstName}', '${data.eLastName}', '${data.eRole}', '${data.eManager}');`)

        console.log('Employee succesffully added to the employee table!');
      });
      };

module.exports = { GETemployee, ADDemployee };
