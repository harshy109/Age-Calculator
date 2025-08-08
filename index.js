const currDay = new Date();
console.log(currDay);

const birthDateInput = document.querySelector('.date').value;

const birthDate = new Date(birthDateInput);

console.log(birthDate.getDay()," ",birthDate.getMonth(), " ", birthDate.getFullYear());