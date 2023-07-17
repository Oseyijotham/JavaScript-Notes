//Homework 16
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
 /* let employee_name;
  let employee_salary;

  salaries = {
    [employee_name]: employee_salary,
  };*/
    
  const keys = Object.values(salaries);
    
  for(const key of keys){
    totalSalary = key + totalSalary;
  }
  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({mango: 100, poly: 150, alfred: 80 }));
