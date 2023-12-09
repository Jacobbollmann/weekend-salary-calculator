const monthBudget = 20000;
let monthExpenses = 0;


//Function to add values to table
function employeeInfo() {

  //Define all input values
  let firstName = document.querySelector('#firstNameInput').value;
  let lastName = document.querySelector('#lastNameInput').value;
  let idValue = document.querySelector('#idInput').value;
  let title = document.querySelector('#titleInput').value;
  let salary = document.querySelector('#annualSalaryInput').value;
  //Target table body
  let tableBody = document.querySelector('#tableBody');
  //Target total monthly value in footer
  let totalMonthly = document.querySelector('#totalMonthly');

  tableBody.innerHTML += `
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idValue}</td>
    <td>${title}</td>
    <td>$${salary}</td>
    <td><button onclick="deleteRow(event)">Delete</button></td>
  </tr>
  `
  //update monthly budget + change value on DOM
  let salaryByMonth = salary / 12;
  monthExpenses += salaryByMonth;

  totalMonthly.innerText = monthExpenses;

  //check budget
  overBudget();
  //clear input values
  clearInputs();
};  

//create function to clear inputs
function clearInputs() {
  document.querySelector('#firstNameInput').value = '';
  document.querySelector('#lastNameInput').value = '';
  document.querySelector('#idInput').value = '';
  document.querySelector('#titleInput').value = '';
  document.querySelector('#annualSalaryInput').value = '';
}

//create delete row funtion
function deleteRow(event){
  event.target.parentElement.parentElement.remove();
}

//add over-budget class to footer if over 20k
function overBudget() {
  let expenses = document.querySelector('#totalMonthly').innerText;
  let footer = document.querySelector('footer');

  if ( expenses > monthBudget ) {
    footer.classList.add("over-budget");
  }
;} 
