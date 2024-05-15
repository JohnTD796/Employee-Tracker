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
    database.query(`SELECT r.id, r.title, r.salary, d.dept_name as department FROM role as r JOIN department as d ON r.department_id = d.id;`, function (err, { rows }) {
        if (err) {
            console.log(err);
        }
        console.table(rows);
    });
};

function ADDrole() {
  
  database.query(`SELECT id, dept_name FROM department`).then(({rows}) => {
    rRows = rows.map((item) => ({   
     name: item.dept_name,
     value: item.id
     }))
    
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
      choices: rRows
    }
]


inquirer
      .prompt(rQuestions)
  
      .then((data) => {
        database.query(`INSERT INTO role (title, salary, department_id) VALUES ('${data.rName}', '${data.rSalary}', '${data.rDept}');`)

        console.log('Role succesffully added to the role table!');
      });
    }
  )}

function UPDATErole() {

database.query(`SELECT id, title FROM role`).then(({rows}) => {
   rRows = rows.map((item) => ({   
    name: item.title,
    value: item.id
    }))
    
  database.query(`SELECT id, first_name, last_name FROM employee`).then(({rows}) => {
    eRows = rows.map((item) => ({
      name: item.first_name,
      value: item.id
    }))

    rQuestions = [
        {
          type: 'list',
          name: 'eName',
          message: 'What is the ID of the employee you want to change?',
          choices: eRows
        },
    
        {
          type: 'list',
          name: 'newRole',
          message: 'select the employees new role?',
          choices: rRows
        }
    ]
    
    inquirer
          .prompt(rQuestions)
      
          .then((data) => {
            console.log(data.newRole)
            console.log(data.eName)
            database.query(`UPDATE employee SET role_id = (${data.newRole}) WHERE id = ${data.eName};`)
    
            console.log('Role succesffully updated in the role table!');
          });
        })
      })
}

module.exports = { GETrole, ADDrole, UPDATErole };
