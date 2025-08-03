/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var crntSalary = startingSalary;
for (var i = 1; i <= experience; i++) {
  crntSalary = crntSalary + crntSalary * (5 / 100);
}
var result = crntSalary.toFixed(2);
console.log(result);
