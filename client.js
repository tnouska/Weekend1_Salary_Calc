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
  // $('#tableBody').on('click', '.workerSalary', removeEmployeeDom);
}
//functions for eventHandler
function addWorker() {
createEmoployee();
updateDom();
}
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
    console.log('allWorkers[i]',allWorkers[i].annualSalary);
    console.log('totalSalary',totalSalary);
  }
  $('#totalSalary').empty();
  if (totalSalary > 20000) {
    $('#totalSalary').append('<h3 class="redSalary">Total Monthly Salary Cost: $' + totalSalary.toFixed(2) + '</h3>');
  }
  else if (totalSalary <= 20000) {
    $('#totalSalary').append('<h3 class="greenSalary">Total Monthly Salary Cost: $' + totalSalary.toFixed(2) + '</h3>');
  }
}
function updateDom() {
  $('#tableBody').empty();
  for (let worker of allWorkers) {
    $('#tableBody').append('<tr class="workerInfo">' + '<td>' + worker.fName + '</td>' +
                          '<td>' + worker.lName + '</td>' +
                          '<td id="empId">' + worker.idNum + '</td>' +
                          '<td>' + worker.jobTitle + '</td>' +
                          '<td class="workerSalary">' + worker.annualSalary + '</td>' + '</tr>');
                        }
  calcTotalSalary();
}
function removeEmployeeArray() {
  let inputEmployee = $('#removeInput').val();
  for (var x = 0; x < allWorkers.length; x++) {
    if (inputEmployee === allWorkers[x].idNum) {
      allWorkers.splice(x, 1);
    }
  }updateDom();
}
