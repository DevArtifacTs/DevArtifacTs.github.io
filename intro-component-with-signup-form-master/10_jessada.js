// Exercise #1
const  calculatePayment = (price) => (price *(price *(0.1/100))) + 3 ;
console.log(calculatePayment(100));

// Exercise #2
// part1 
const sayHello = (personName1, personName2, personName3) => console.log(`Welcome {${personName1}} {${personName2}} {${personName3}} `)
sayHello("James", "Shelby", "Lee");

// part2 
const calculateAge = (birthYear) => {
  const now = new Date().getFullYear();
  return now -birthYear ;
}
console.log(calculateAge(1996))

const person1 = {
  name : 'James',
  birthYear : 1996,
  age : ""
}
const person2 = {
  name : 'Shelby',
  birthYear : 1990,
  age : ""
}
const person3 = {
  name : 'Lee',
  birthYear : 1985,
  age : ""
}
// part3
const sayHelloWithAge = (person1,person2,person3) => {
  const now = new Date().getFullYear();
  person1.age = now - person1.birthYear;
  person2.age = now - person2.birthYear;
  person3.age = now - person3.birthYear;
  console.log(`Welcome {${person1.name}}, you are {${person1.age}}. Welcome {${person2.name}}, you are {${person2.age}}.   Welcome {${person3.name}}, you are {${person3.age}}.`)
}
sayHelloWithAge(person1,person2,person3);

// Challenge
// part1
const isPassed = (score) => {
  return (score >= 5 ? true : false ) ;
}
console.log('is passed ? :',isPassed(5));

// part2 
const isExcellent = (score) => {
  let isPass = false ;
  if (score >= 5){
    isPass = true;
    if(score > 8) {
      console.log(`is passed : ${isPass} Your score is: ${score} Excellent`)
    }
  }
  else {
    return isPass ;
  }
}
isExcellent(9);

// part3 
const isPerfect = (score) => {
  let isPass = false ;
  if (score >= 5){
    isPass = true;
    if(score === 11) {
      console.log(`is passed : ${isPass} Your score is: ${score} Perfect!`)
    }
  }
  else {
    return isPass ;
  }
}
isPerfect(11);