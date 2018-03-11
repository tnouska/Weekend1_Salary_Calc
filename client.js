//Classes
class Employee {
  constructor(fNameIn, lNameIn, idNumIn, jobTitleIn, annualSalaryIn) {
    this.fName = fNameIn;
    this.lName = lNameIn;
    this.idNum = idNumIn;
    this.jobTitle = jobTitleIn;
    this.annualSalary = annualSalaryIn;
  }
}
//Global Variables
let allWorkers = [];

$(document).ready(readyNow);

function readyNow() {
eventHandler();
}

function eventHandler() {
  $('#submitButton').on('click', addWorker);
  $('#removeButton').on('click', removeEmployeeArray);
}
//functions for eventHandler
function createEmoployee() {
  let fNameIn = $('#fnInput').val();
  let lNameIn = $('#lnInput').val();
  let idNumIn = $('#idInput').val();
  let jobTitleIn = $('#titleInput').val();
  let annualSalaryIn = $('#salaryInput').val();

  let worker = new Employee (fNameIn, lNameIn, idNumIn, jobTitleIn, annualSalaryIn);
  allWorkers.push(worker);
}
function calcTotalSalary() {
  let totalSalary = 0;
  for (var i = 0; i < allWorkers.length; i++) {
    totalSalary += parseInt(allWorkers[i].annualSalary);
  }
  $('#totalSalary').empty();
  if (totalSalary > 20000) {
    $('#totalSalary').append('<h3 class="redSalary">Total Monthly Salary Cost: $' + totalSalary.toFixed(2) + '</h3>');
  }
  else if (totalSalary <= 20000) {
    $('#totalSalary').append('<h3 class="greenSalary">Total Monthly Salary Cost: $' + totalSalary.toFixed(2) + '</h3>');
  }
}
function addWorker() {
createEmoployee();
$('#tableBody').empty();
for (let worker of allWorkers) {
  $('#tableBody').append('<tr>' + '<td>' + worker.fName + '</td>' +
                        '<td>' + worker.lName + '</td>' +
                        '<td class="empId">' + worker.idNum + '</td>' +
                        '<td>' + worker.jobTitle + '</td>' +
                        '<td class="salary">' + worker.annualSalary + '</td>' + '</tr>');
                      }
                      console.log();
calcTotalSalary();
}
function removeEmployeeDom() {
  let inputEmployee = $('#removeInput').val();

}

function removeEmployeeArray() {
  let inputEmployee = $('#removeInput').val();
  for (var i = 0; i < allWorkers.length; i++) {
    if (inputEmployee === allWorkers[i].idNum) {
      allWorkers.splice(i, 1);
      calcTotalSalary();
      removeEmployeeDom();
       break;
    }
  }
}
