const fs = require('fs');
const inquirer = require('inquirer');
const { firstResponse, GETdepartments, GETemployees, GETroles } = require('./public/scripts/route_choice');
// const GETdepartment = require('./routes/department')

const firstQuestion = [
    {
        type: 'list',
        name: 'DREinfo',
        message: 'What do you want to do?',
        choices: ['View All Departments',
                    'View All Roles', 
                    'View All Employees', 
                    'Add a Department', 
                    'Add a Role', 
                    'Add an Employee', 
                    'Update an Employee']
    }
]



function init() {
    inquirer
    .prompt(firstQuestion)

    .then((data) => {
        // let choice = firstResponse(data);
        firstResponse(data);
        // switch(data.DREinfo){
        //     case 'View All Departments':
        //         return GETdepartments();
        //     case 'View All Roles':
        //         return GETroles();
        //     case 'View All Employees':
        //         return GETemployees();
        // }

        // if(choice === 'View All Departments'){
        //     return GETdepartments()
        // } else 
        // if(choice === 'View All Roles'){
        //     return GETroles()
        // }else 
        // if(choice === 'View All Employees'){
        //     return GETemployees()
        // }
        // inquirer
        // .prompt(choice)
});
}

init();