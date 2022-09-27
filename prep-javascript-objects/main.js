const person = {
  firstName: 'Raymond',
  lastName: 'Ho',
  hobby: 'coding'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Loan Agent';
console.log("The person's current job is:", person.job);

person.previousJob = 'Hospital Lab Technician';
console.log("The person's previous job is:", person.previousJob);

console.log('The complete person object is:', person);
