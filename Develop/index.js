const fs = require('fs');
const inquirer = require('inquirer');
const { firstResponse } = require('./public/route_choice');

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
            firstResponse(data);
        });
}

init();