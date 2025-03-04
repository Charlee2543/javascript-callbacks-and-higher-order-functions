// Exercise #1: For Each Function
function forEach(array, operation) {
  
  // Start coding here
  for (let i = 0; i < array.length; i++) {
    newEmployeeSalaries.push(operation(array[i])) 
    }    
  }

function operation(number) {
  return number + 5000;
} 

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];
// Using `forEach` function here

forEach(employeeSalaries, operation) 
console.log(newEmployeeSalaries); 
