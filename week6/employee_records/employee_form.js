var employees = []

function Employee(name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full Time"
}

function printEmployeeForm(employee) {
    employees.push(["Name:" +  employee.name + " , Job Title:" + employee.title + " , Salary:" + employee.salary + "/hour" + " , Status:" +
    employee.status])
    console.log("Name:" +  employee.name + " , Job Title:" + employee.title + " , Salary:" + employee.salary + "/hour" + " , Status:" +
    employee.status)
}

var employee1 = new Employee("Sarah", "Project manager", 3000)
var employee2 = new Employee("Tim", "Sales Manager", 2000 )
var employee3 = new Employee("Gus", "Web Developer", 2000)
Employee.prototype.newStatus = function() {
    this.status = "Contractor"
}

employee3.newStatus()
printEmployeeForm(employee1)
printEmployeeForm(employee2)
printEmployeeForm(employee3)

    
    

console.log(employees)
// {
//     name:"Sarah",
//     JobTile: "Project manager",
//     salary: 3000,
//     status: "Full Time"
    
// },
// {
//     name: "Tim",
//     JobTile: "Sales Manager",
//     salary: 2000
// },
// {
//     name: "Gus",
//     JobTile: "Web Developer",
//     salary: 1000
// }