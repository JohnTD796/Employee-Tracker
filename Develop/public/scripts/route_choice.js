// const { type } = require("os");

function GETdepartments(){
    console.log("departments gotten")
};

function GETemployees(){
    console.log("Employees gotten")
};

function GETroles(){
    console.log("Roles gotten")
};

function firstResponse(data) {
    let secondQuestion
    switch(data.DREinfo){
        case 'View All Departments':
            return GETdepartments()
        case 'View All Roles':
            return GETemployees();
        case 'View All Employees':
            return GETroles();
        case 'Add a Department':
            return secondQuestion;
        case 'Add a Role':
            return secondQuestion;
        case 'Add an Employee':
            return secondQuestion;
        case 'Update an Employee':
            return secondQuestion;
    }
}
// is it redundant to have a switch statement and the if statement in the init function?

module.exports ={ firstResponse, GETdepartments, GETemployees, GETroles };