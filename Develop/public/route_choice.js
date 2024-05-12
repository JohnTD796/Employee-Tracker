const { GETdepartment, ADDdepartment} = require('../SQL_querys/department');
const { GETemployee, ADDemployee } = require('../SQL_querys/employee');
const { GETrole, ADDrole, UPDATErole } = require('../SQL_querys/role');

function firstResponse(data) {
    let secondQuestion
    switch (data.DREinfo) {
        case 'View All Departments':
            return GETdepartment();
        case 'View All Roles':
            return GETemployee();
        case 'View All Employees':
            return GETrole();
        case 'Add a Department':
            return ADDdepartment();
        case 'Add a Role':
            return ADDrole();
        case 'Add an Employee':
            return ADDemployee();
        case 'Update an Employee':
            return UPDATErole();
    }


}
// is it redundant to have a switch statement and the if statement in the init function?

module.exports = { firstResponse };