const inquirer = require('inquirer');
const { Pool } = require('pg');

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

function GETdepartment() {
  database.query(`SELECT * FROM department;`, function (err, { rows }) {
    if (err) {
      console.log(err);
    }
    console.table(rows);
  });
};

function ADDdepartment() {
  departmentName = [
    {
      type: 'input',
      name: 'deptName',
      message: 'What is the name of the department you want to add?'
    }
  ]

  inquirer
    .prompt(departmentName)

    .then((data) => {
      database.query(`INSERT INTO department (dept_name) VALUES ('${data.deptName}');`)

      console.log('Department succesffully added to department table!');
    });
};



module.exports = { GETdepartment, ADDdepartment };
