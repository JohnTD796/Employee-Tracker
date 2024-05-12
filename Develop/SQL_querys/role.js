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

function GETrole() {
    database.query(`SELECT * FROM role;`, function (err, { rows }) {
        if (err) {
            console.log(err);
        }
        console.table(rows);
    });
};

function ADDrole() {

    rQuestions = [
    {
      type: 'input',
      name: 'rName',
      message: 'What is the name of the role you want to add?'
    },

    {
      type: 'input',
      name: 'rSalary',
      message: 'What is the salary for this position?'
    },

    {
      type: 'list',
      name: 'rDept',
      message: 'What department does this role belong to?',
      choices: deptChoices
    }
]

inquirer
      .prompt(rQuestions)
  
      .then((data) => {
        database.query(`INSERT INTO role (title, salary, department_id) VALUES ('${data.rName}', '${data.rSalary}', '${data.rDept}');`)

        console.log('Role succesffully added to the role table!');
      });
}

function UPDATErole() {

    rQuestions = [
        {
          type: 'list',
          name: 'eName',
          message: 'What is the ID of the employee you want to change?',
          choices: ['111', '222', '333']
        },
    
        {
          type: 'list',
          name: 'newRole',
          message: 'select the employees new role?',
          choices: ['11', '22', '33']
        }
    ]
    
    inquirer
          .prompt(rQuestions)
      
          .then((data) => {
            database.query(`UPDATE employee (role_id) VALUES (${newRole}) WHERE id = ${eName};`)
    
            console.log('Role succesffully added to the role table!');
          });
    }

module.exports = { GETrole, ADDrole, UPDATErole };
